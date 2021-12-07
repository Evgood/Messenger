import Block from '../../utils/Block'
/* @ts-ignore */
import template from './chat.hbs';

type Props = Record<string, any>;

class Chat extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Chat;