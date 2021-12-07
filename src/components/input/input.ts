import Block from '../../utils/Block';
/* @ts-ignore */
import template from './input.hbs';
import './input.scss';

type Props = Record<string, any>;

class Input extends Block {
    constructor(props: Props = {}) {
        super("input", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Input;