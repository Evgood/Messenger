import { input } from "../../components/input/input";

const registerTmpl = `
    <form class="form">

        <h1 class="form__title">Регистрация</h1>

        <div class="form__wrap form__wrap_16">
            ${input({
                className: 'input form__input',
                type: 'text',
                name: 'first_name',
                placeholder: 'Имя',
            })}
            ${input({
                className: 'input form__input',
                type: 'text',
                name: 'second_name',
                placeholder: 'Фамилия',
            })}
            ${input({
                className: 'input form__input',
                type: 'text',
                name: 'login',
                placeholder: 'Логин',
            })}
            ${input({
                className: 'input form__input',
                type: 'tel',
                name: 'phone',
                placeholder: 'Телефон',
            })}
            ${input({
                className: 'input form__input',
                type: 'email',
                name: 'email',
                placeholder: 'Почта',
            })}
            ${input({
                className: 'input form__input',
                type: 'password',
                name: 'password',
                placeholder: 'Пароль',
            })}
            ${input({
                className: 'input form__input',
                type: 'password',
                name: 'password',
                placeholder: 'Пароль еще раз',
            })}
        </div>

        <button type="submit" class="form__button button">Войти</button>

        <div class="form__wrap form__wrap_6">
            <span class="form__desc">Уже есть аккаунт?</span>
            <a href="/login" class="form__link">Войти</a>
        </div>

    </form>
`;
export { registerTmpl };