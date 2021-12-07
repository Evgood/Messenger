import ChatHeader from '../../module/chatHeader/chatHeader';
import Block from '../../utils/Block'
/* @ts-ignore */
import template from './chat.hbs';
import { svg } from '../../../static/images/svg';

type Props = Record<string, any>;

class Chat extends Block {
    constructor(props: Props = {}) {
        let chatHeader: Block | null = null;

        chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                content: svg.setting,
            },
            input: {
                className: 'input input__search',
            },
        })

        super("div", {
            ...props,
            chatHeader
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Chat;