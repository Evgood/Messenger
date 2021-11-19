import '../../module/form/form';
import registerTmpl from './register.hbs';

const data = {
    formContext: {
        formTitle: 'Регистрация',
        isFooterForm: true,
        footerFormDesc: 'Уже есть аккаунт?',
        footerFormLinkName: 'Войти',
        footerFormLinkUrl: '/login',
        inputs: [
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Имя',
                }
            },
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                }
            },
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
                    type: 'tel',
                    name: 'phone',
                    placeholder: 'Телефон',
                }
            },
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
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
            {
                inputContext: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль еще раз',
                }
            },
        ],
        buttonContext: {
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