import '../../module/form/form';
import loginTmpl from "./login.hbs";

const data = {
    formContex: {
        formTitle: 'Вход',
        isFooterForm: true,
        footerFormDesc: 'Нет аккаунта?',
        footerFormLinkName: 'Регистрация',
        footerFormLinkUrl: '/register',
        inputs: [
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                }
            },
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
                }
            },
        ],
        buttonContex: {
            className: 'form__button button',
            type: 'submit',
            content: 'Войти',
        },
    }
}

const renderLogin = () => {
    return loginTmpl(data);
}

export { renderLogin };