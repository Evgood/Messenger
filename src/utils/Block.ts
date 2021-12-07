import Handlebars from 'handlebars/dist/handlebars.runtime';
import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus';

type Props = Record<string, any>;
type Children = Record<string, Block>;
type Events = Record<string, string>;
abstract class Block {

    private EVENTS: Events = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CWU: "flow:component-will-unmount",
        FLOW_RENDER: "flow:render",
    };
    private element: HTMLElement;
    private tagName: string;

    protected eventBus: EventBus;
    protected props: Props;
    protected children: Children;
    protected id: string;


    public constructor(tagName: string = 'div', propsAndChildren: Props = {}) {
        this.tagName = tagName;
        this.id = makeUUID();

        const { children, props } = this.getChildren(propsAndChildren);
        this.children = children;
        this.props = this.makePropsProxy({ ...props, id: this.id });

        this.eventBus = new EventBus();
        this.registerEvent();
        this.eventBus.emit(this.EVENTS.INIT);
    }


    public setProps(newProps: Props): void {
        if (!newProps) return;

        Object.assign(this.props, newProps);
    }


    public getElement(): HTMLElement {
        return this.element;
    }

    public deleteElement(): void {
        this.eventBus.emit(this.EVENTS.FLOW_CWU);
    }


    public dispatchMountComponent(): void {
        this.eventBus.emit(this.EVENTS.FLOW_CDM);
    }


    public componentDidMount(): void { }


    public componentDidUpdate(): void { }


    public componentWillUnmount(): void { }


    public abstract render(): DocumentFragment


    private mountComponent(): void {
        this.componentDidMount();

        Object.values(this.children).forEach((child) => {
            child.dispatchMountComponent();
        });
    }


    private updateComponent(oldProps: Props, newProps: Props): void {
        const isUpdate = (oldProps != newProps) ? true : false;

        if (isUpdate) {
            this.removeEvents();
            this.eventBus.emit(this.EVENTS.FLOW_RENDER);
            this.componentDidUpdate();
        }
    }


    private unmountComponent(): void {
        this.componentWillUnmount();
        this.removeEvents();

        this.element.remove();
    }


    private renderComponent(): void {
        this.element.innerHTML = '';
        this.element.append(this.render());

        this.addEvents();
    }


    private makePropsProxy(props: Props): Props {
        const proxySetting = {
            get: (target: Props, prop: string): unknown => {
                return target[prop];
            },

            set: (target: Props, prop: string, value: unknown): boolean => {
                const oldProps = target[prop];
                target[prop] = value;

                this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
                return true;
            },

            deleteProperty: (target: Props, prop: string): boolean => {
                const oldProps = target[prop];
                delete target[prop];

                this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
                return true;
            }
        }

        return new Proxy(props, proxySetting);
    }


    private registerEvent(): void {
        this.eventBus.on(this.EVENTS.INIT, this.init.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDM, this.mountComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CDU, this.updateComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_CWU, this.unmountComponent.bind(this));
        this.eventBus.on(this.EVENTS.FLOW_RENDER, this.renderComponent.bind(this));
    }


    private init(): void {
        this.createResources();
        this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }


    private createResources(): void {
        this.element = this.createDocumentElement(this.tagName);

        if (this.props.className) {
            this.element.setAttribute('class', this.props.className);
        }
    }


    private createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName);
    }


    private addEvents(): void {
        const { events } = this.props;

        if (events) {
            Object.keys(events).forEach((eventName) => {
                this.element.addEventListener(eventName, events[eventName]);
            })
        }
    }


    private removeEvents(): void {
        const { events } = this.props;

        if (events) {
            Object.keys(events).forEach((eventName) => {
                this.element.addEventListener(eventName, events[eventName]);
            })
        }
    }


    private getChildren(propsAndChildren: Props) {
        const children = {};
        const props: Props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block || Array.isArray(value)) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }


    protected setTemplate(template: Function, props: Props) {
        const propsAndStubs = { ...props };

        // Create the stubs
        Object.entries(this.children).forEach(([key, child]) => {
            if (Array.isArray(child)) {
                // If the array of properties
                child.forEach((innerChild: Children) => {
                    Object.entries(innerChild).forEach(([innerChildKey, child]) => {
                        if (!propsAndStubs[key]) {
                            propsAndStubs[key] = [];
                        }

                        propsAndStubs[key].push({ [innerChildKey]: `<div data-id="${child.id}"></div>` })
                    })
                })
            } else {
                propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
            }
        });

        const fragment = this.createDocumentElement('template') as HTMLTemplateElement;
        fragment.innerHTML = template(propsAndStubs);

        // Replace the stubs with a Block
        Object.values(this.children).forEach(child => {
            if (Array.isArray(child)) {
                // If the array of properties
                child.forEach((innerChild: Children) => {
                    Object.entries(innerChild).forEach(([innerChildKey, child]) => {
                        const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
                        (stub as HTMLElement).replaceWith(child.getElement());
                    })
                })
            } else {
                const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
                (stub as HTMLElement).replaceWith(child.getElement());
            }
        });

        return fragment.content;
    }
}

export default Block;