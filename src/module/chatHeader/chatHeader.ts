import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './chatHeader.hbs';

type Props = Record<string, any>;

class ChatHeader extends Block {
    constructor(props: Props = {}) {
        let button: Block | null = null;
        let input: Block | null = null;

        console.log(props.button.className)

        button = new Button({
            className: props.button.className,
            content: props.button.content,
        })

        if (props.input) {
            input = new Input({
                className: props.input.className,
            })
        }

        super("div", {
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