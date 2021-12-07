import Block from '../../utils/Block';
/* @ts-ignore */
import template from './error.hbs';
import './error.scss';

type Props = Record<string, any>;

class Error extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Error;