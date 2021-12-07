import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './messageControls.hbs';

type Props = Record<string, any>;

class MessageControls extends Block {
    constructor(props: Props = {}) {

        const button = new Button({
            className: props.button.className,
            type: props.button.type,
            content: props.button.content,
        });

        const input = new Input({
            className: props.input.className,
            type: props.input.type,
            name: props.input.name,
            placeholder: props.input.placeholder,
        });


        super("div", {
            button,
            input,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageControls;