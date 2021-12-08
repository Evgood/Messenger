import { Props } from '../../types';
import Block from '../../utils/Block'

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
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'tel',
                    name: 'phone',
                    placeholder: 'Телефон',
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
                })
            },
            {
                input: new Input({
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль еще раз',
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
            footerFormLinkUrl: '/login',
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

export default Register;
