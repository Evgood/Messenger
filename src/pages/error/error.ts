import { Props } from '../../types';
import Block from '../../utils/Block'

import ErrorComponent from '../../components/error/error';

import template from './error.hbs';

class ErrorPage extends Block {
    constructor(props: Props = {}) {
        let errorProps = {};

        switch (props.code) {
        case 500:
            errorProps = {
                title: '500',
                message: 'Все пропало. Но мы уже чиним',
                linkName: 'Начать с главной',
                linkUrl: '/',
            }
            break;
        case 404:
            errorProps = {
                title: '404',
                message: 'Кажется такой страницы нет',
                linkName: 'Начать с главной',
                linkUrl: '/',
            }
            break;

        default:
            break;
        }

        const errorElement = new ErrorComponent({ ...errorProps })

        super(
            'div',
            {
                ...props,
                errorElement
            }
        );
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default ErrorPage;
