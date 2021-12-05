import Handlebars from 'handlebars/dist/handlebars.runtime';
import { v4 as makeUUID } from 'uuid';

abstract class Block {

    private EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CWU: "flow:component-will-unmount",
        FLOW_RENDER: "flow:render",
    };
    private element;

    protected eventBus;
    protected props;
    protected children;
    protected id;

    public constructor(private tagName, propsAndChildren) {
        this.id = makeUUID();

        const { children, props } = this.getChildren(propsAndChildren);
        this.children = children;
        this.props = this.makePropsProxy({ ...props, id: this.id });

        this.eventBus = new EventBus();
        this.registerEvent();
        this.eventBus.emit(this.EVENTS.INIT);
    }


    public setProps(newProps) {
        if (!newProps) return;

        Object.assign(this.props, newProps);
    }


    public getElement() {
        return this.element;
    }


    public dispatchMountComponent() {
        this.eventBus.emit(this.EVENTS.FLOW_CDM);
    }


    public componentDidMount() { }


    public componentDidUpdate() { }


    public componentWillUnmount() { }


    public abstract render()


    private mountComponent() {
        this.componentDidMount();

        Object.values(this.children).forEach(child => {
            child.dispatchMountComponent();
        });
    }


    private updateComponent(oldProps, newProps) {
        const isUpdate = (oldProps != newProps) ? true : false;

        if (isUpdate) {
            this.removeEvents();
            this.eventBus.emit(this.EVENTS.FLOW_RENDER);
        }

        this.componentDidUpdate();
    }


    private unmountComponent() {
        this.removeEvents();
        // Удалить из DOM
    }


    private renderComponent() {
        this.element.innerHTML = '';
        this.element.append(this.render());

        this.addEvents();
    }


    private makePropsProxy(props) {
        const proxySetting = {
            get: (target, prop) => {
                return target[prop];
            },

            set: (target, prop, value) => {
                const oldProps = target[prop];
                target[prop] = value;

                this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
                return true;
            },

            deleteProperty: (target, prop) => {
                const oldProps = target[prop];
                delete target[prop];

                this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
                return true;
            }
        }

        return new Proxy(props, proxySetting);
    }


    private registerEvent() {
        this.eventBus.on(this.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDM, this.mountComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDU, this.updateComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CWU, this.unmountComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_RENDER, this.renderComponent.bind(this));
    }


    private init() {
        this.createResources();
        this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }


    private createResources() {
        this.element = this.createDocumentElement(this.tagName);

        if (this.props.className) {
            this.element.setAttribute('class', this.props.className);
        }
    }


    private createDocumentElement(tagName) {
        return document.createElement(tagName);
    }


    private addEvents() {
        const { events } = this.props;

        if (events) {
            Object.keys(events).forEach((eventName) => {
                this.element.addEventListener(eventName, events[eventName]);
            })
        }
    }


    private removeEvents() {
        const { events } = this.props;

        if (events) {
            Object.keys(events).forEach((eventName) => {
                this.element.addEventListener(eventName, events[eventName]);
            })
        }
    }


    private getChildren(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }


    protected setTemplate(template, props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });

        const fragment = this.createDocumentElement('template');
        fragment.innerHTML = template(propsAndStubs);

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
            stub.replaceWith(child.getElement());
        });

        return fragment.content;
    }
}