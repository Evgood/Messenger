import '../../module/form/form';
import loginTmpl from './login.hbs';

const data = {
    formContext: {
        formTitle: 'Вход',
        isFooterForm: true,
        footerFormDesc: 'Нет аккаунта?',
        footerFormLinkName: 'Регистрация',
        footerFormLinkUrl: '/register',
        inputs: [
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                }
            },
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
                }
            },
        ],
        buttonContext: {
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