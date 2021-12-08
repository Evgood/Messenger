import { Props } from '../../types';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './button.hbs';
import './button.scss';


class Button extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Button;