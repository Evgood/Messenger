import '../../module/form/form';
import registerTmpl from "./register.hbs";

const data = {
    formContex: {
        formTitle: 'Регистрация',
        isFooterForm: true,
        footerFormDesc: 'Уже есть аккаунт?',
        footerFormLinkName: 'Войти',
        footerFormLinkUrl: '/login',
        inputs: [
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Имя',
                }
            },
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                }
            },
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
                    type: 'tel',
                    name: 'phone',
                    placeholder: 'Телефон',
                }
            },
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
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
            {
                inputContex: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль еще раз',
                }
            },
        ],
        buttonContex: {
            className: 'form__button button',
            type: 'submit',
            content: 'Зарегистрироваться',
        },
    }
}

const renderRegister = () => {
    return registerTmpl(data);
}

export { renderRegister };