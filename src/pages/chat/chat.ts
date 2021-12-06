import Block from '../../utils/Block'
import chatTmpl from './chat.hbs';

type Props = Record<string, any>;

class Chat extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    componentDidMount() {
        console.log('Chat смонтирован')
    }

    componentDidUpdate() {
        console.log('Chat обновлен')
    }

    render() {
        const template: Function = chatTmpl;
        return this.setTemplate(template, this.props);
    }
}

export default Chat;