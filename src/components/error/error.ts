import { Props } from '../../types';
import Block from '../../utils/Block';
import template from './error.hbs';
import './error.scss';

class Error extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Error;