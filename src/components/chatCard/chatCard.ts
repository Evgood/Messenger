import Block from '../../utils/Block';
import { Props } from '../../types';
/* @ts-ignore */
import template from './chatCard.hbs';
import './chatCard.scss';


class СhatCard extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default СhatCard;