import Input from '../../components/input/input';
import Form from '../../module/form/form';
import Block from '../../utils/Block'
/* @ts-ignore */
import template from './login.hbs';
/* @ts-ignore */

type Props = Record<string, any>;

class Login extends Block {
    constructor(props: Props = {}) {

        const innerInputs = [
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
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
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
            "div",
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