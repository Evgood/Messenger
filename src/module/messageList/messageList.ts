import { InnerChildren, Props } from '../../types';
import store, { StoreEvents } from '../../utils/Store';
import Block from '../../utils/Block';
import template from './messageList.hbs';
import './messageList.scss';

class MessageList extends Block {
    constructor(props: Props = {}, innerChildren: InnerChildren = [{}]) {
        super('div', {
            ...props,
            messages: innerChildren,
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageList;
