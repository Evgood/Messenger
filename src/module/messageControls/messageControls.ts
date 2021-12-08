import { Props } from '../../types';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './messageControls.hbs';


class MessageControls extends Block {
    constructor(props: Props = {}) {

        const addButton = new Button({
            className: props.addButton.className,
            type: props.addButton.type,
            content: props.addButton.content,
        });

        const sendButton = new Button({
            className: props.sendButton.className,
            type: props.sendButton.type,
            content: props.sendButton.content,
        });

        const input = new Input({
            className: props.input.className,
            type: props.input.type,
            name: props.input.name,
            placeholder: props.input.placeholder,
        });

        super("div", {
            addButton,
            input,
            sendButton,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageControls;