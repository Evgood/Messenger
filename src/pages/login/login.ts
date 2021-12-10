import { Props } from '../../types';
import Block from '../../utils/Block'
import { inputFocus, inputBlur } from '../../utils/events'

import Form from '../../module/form/form';
import Input from '../../components/input/input';

import template from './login.hbs';

class Login extends Block {
    constructor(props: Props = {}) {

        const innerInputs = [
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                    events: {
                        focus: inputFocus,
                        blur: inputBlur,
                    }
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
                    events: {
                        focus: inputFocus,
                        blur: inputBlur,
                    }
                })
            },
        ]

        const form = new Form({
            button: {
                className: 'form__button button',
                type: 'submit',
                content: 'Войти',
            },
            formTitle: 'Вход',
            footerFormDesc: 'Нет аккаунта?',
            footerFormLinkName: 'Регистрация',
            footerFormLinkUrl: '/register',
        }, innerInputs)

        super(
            'div',
            {
                ...props,
                form
            }
        );
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Login;
