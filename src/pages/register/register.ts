import { Props } from '../../types';
import Block from '../../utils/Block';
import { inputFocus, inputBlur, signUp, goToLogin } from '../../utils/events';

import Form from '../../module/form/form';
import Input from '../../components/input/input';

import template from './register.hbs';

class Register extends Block {

    constructor(props: Props = {}) {
        const innerInputs = [
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Имя',
                    events: {
                        focus: inputFocus,
                        blur: inputBlur,
                    }
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                    events: {
                        focus: inputFocus,
                        blur: inputBlur,
                    }
                })
            },
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
                    type: 'tel',
                    name: 'phone',
                    placeholder: 'Телефон',
                    events: {
                        focus: inputFocus,
                        blur: inputBlur,
                    }
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
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
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль еще раз',
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
                content: 'Зарегистрироваться',
            },
            formTitle: 'Регистрация',
            footerFormDesc: 'Уже есть аккаунт?',
            footerFormLinkName: 'Войти',
            events: {
                submit: signUp,
                click: goToLogin,
            }
        }, innerInputs)

        super('div', { ...props, form });
    }


    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Register;
