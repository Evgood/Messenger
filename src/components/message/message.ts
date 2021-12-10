import { Props } from '../../types';
import Block from '../../utils/Block';
import template from './message.hbs';
import './message.scss';

class Message extends Block {
    constructor(props: Props = {}) {
        super('div', props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Message;
