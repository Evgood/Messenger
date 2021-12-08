import { Props } from '../../types';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './error.hbs';
import './error.scss';


class Error extends Block {
    constructor(props: Props = {}) {
        super("div", props);

        console.log(props)
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Error;