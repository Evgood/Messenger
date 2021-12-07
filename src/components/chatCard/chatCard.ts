import Block from '../../utils/Block';
/* @ts-ignore */
import template from './chatCard.hbs';
import './chatCard.scss';

type Props = Record<string, any>;

class СhatCard extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default СhatCard;