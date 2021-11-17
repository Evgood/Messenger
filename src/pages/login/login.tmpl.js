import { input } from "../../components/input/input";

const loginTmpl = `
    <form class="form">

        <h1 class="form__title">Вход</h1>

        <div class="form__wrap form__wrap_16">
            ${input({
                className: 'input form__input',
                type: 'text',
                name: 'login',
                placeholder: 'Логин',
            })}
            ${input({
                className: 'input form__input',
                type: 'password',
                name: 'password',
                placeholder: 'Пароль',
            })}
        </div>

        <button type="submit" class="form__button button">Войти</button>

        <div class="form__wrap form__wrap_6">
            <span class="form__desc">Нет аккаунта?</span>
            <a href="/register" class="form__link">Регистрация</a>
        </div>

    </form>
`
export { loginTmpl };