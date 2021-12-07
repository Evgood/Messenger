import Block from '../../utils/Block';
/* @ts-ignore */
import template from './button.hbs';
import './button.scss';

type Props = Record<string, any>;

class Button extends Block {
    constructor(props: Props = {}) {
        super("button", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Button;