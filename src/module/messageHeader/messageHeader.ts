import { Props } from '../../types';
import Block from '../../utils/Block';
import store, { StoreEvents } from '../../utils/Store';
import Button from '../../components/button/button';
import template from './messageHeader.hbs';
import thumb from '../../../static/images/avatars/thumb.svg';

class MessageHeader extends Block {
    constructor(props: Props = {}) {

        const buttons = [
            {
                button: new Button({
                    className: props.buttons.searchButton.className,
                    type: props.buttons.searchButton.type,
                    content: props.buttons.searchButton.content,
                    events: props.buttons.searchButton.events,
                })
            },
            {
                button: new Button({
                    className: props.buttons.menuButton.className,
                    type: props.buttons.menuButton.type,
                    content: props.buttons.menuButton.content,
                    events: props.buttons.menuButton.events,
                })
            },
        ]

        super('div', {
            buttons,
            thumb
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default MessageHeader;
