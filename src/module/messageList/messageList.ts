import { InnerChildren, Props } from '../../types';
import Block from '../../utils/Block';
import template from './messageList.hbs';

class MessageList extends Block {
    constructor(props: Props = {}, innerChildren: InnerChildren = []) {
        super('div', {
            ...props,
            messages: innerChildren,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageList;
