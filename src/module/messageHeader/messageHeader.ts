import Button from '../../components/button/button';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './messageHeader.hbs';

type Props = Record<string, any>;

class MessageHeader extends Block {
    constructor(props: Props = {}) {

        const buttons = [
            {
                button: new Button({
                    className: props.buttons.searchButton.className,
                    type: props.buttons.searchButton.type,
                    content: props.buttons.searchButton.content,
                })
            },
            {
                button: new Button({
                    className: props.buttons.menuButton.className,
                    type: props.buttons.menuButton.type,
                    content: props.buttons.menuButton.content,
                })
            },
        ]

        super("div", {
            buttons,
            avatarName: props.avatarName,
            avatarUrl: props.avatarUrl,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageHeader;