import { Props } from '../../types';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Block from '../../utils/Block';
import template from './chatHeader.hbs';

class ChatHeader extends Block {
    constructor(props: Props = {}) {
        let button: Block | null = null;
        let input: Block | null = null;

        button = new Button({
            className: props.button.className,
            type: props.button.type,
            content: props.button.content,
            events: props.button.events,
        })

        if (props.input) {
            input = new Input({
                className: props.input.className,
                type: props.input.type,
                name: props.input.name,
                placeholder: props.input.placeholder,
            })
        }

        super('div', {
            button,
            input,
            headerTitle: props.headerTitle,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default ChatHeader;
