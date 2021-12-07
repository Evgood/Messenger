import Block from '../../utils/Block';
/* @ts-ignore */
import template from './messageList.hbs';

type Props = Record<string, any>;

class MessageList extends Block {
    constructor(props: Props = {}) {
        super("div", {});
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageList;