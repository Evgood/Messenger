import Block from '../../utils/Block';
/* @ts-ignore */
import template from './button.hbs';

type Props = Record<string, any>;

class chatCard extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default chatCard;