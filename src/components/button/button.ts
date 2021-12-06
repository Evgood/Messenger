import Block from '../../utils/Block';
import template from './button.hbs';

class Button extends Block {
    constructor(props) {
        super("button", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Button;