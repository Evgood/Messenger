import { input } from '../../components/input/input';

const chatHeaderTmpl = `
    <section class="header">
        <div class="header__left">

            <button class="header__button button">
                <svg class="button__image" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.4999C0 8.05808 0.358172 7.6999 0.8 7.6999H10.2C10.6418 7.6999 11 8.05808 11 8.4999C11 8.94173 10.6418 9.2999 10.2 9.2999H0.8C0.358172 9.2999 0 8.94173 0 8.4999Z" />
                    <path d="M12 8.4999C12 8.05808 12.3582 7.6999 12.8 7.6999H13.2C13.6418 7.6999 14 8.05808 14 8.4999C14 8.94173 13.6418 9.2999 13.2 9.2999H12.8C12.3582 9.2999 12 8.94173 12 8.4999V8.4999Z" />
                    <path d="M0 2.49995C0 2.05812 0.358172 1.69995 0.8 1.69995H6.2C6.64183 1.69995 7 2.05812 7 2.49995C7 2.94178 6.64183 3.29995 6.2 3.29995H0.8C0.358172 3.29995 0 2.94178 0 2.49995Z" />
                    <path d="M8 2.49995C8 2.05812 8.35817 1.69995 8.8 1.69995H13.2C13.6418 1.69995 14 2.05812 14 2.49995C14 2.94178 13.6418 3.29995 13.2 3.29995H8.8C8.35817 3.29995 8 2.94178 8 2.49995V2.49995Z" />
                    <path d="M8.5 7C8.5 6.44772 8.94772 6 9.5 6H10C10.5523 6 11 6.44772 11 7V10C11 10.5523 10.5523 11 10 11H9.5C8.94772 11 8.5 10.5523 8.5 10V7Z" />
                    <path d="M4.5 1C4.5 0.447715 4.94772 0 5.5 0H6C6.55228 0 7 0.447715 7 1V4C7 4.55228 6.55228 5 6 5H5.5C4.94772 5 4.5 4.55228 4.5 4V1Z" />
                </svg>
            </button>

            {{#if withInput}}
                ${input({
                    className: 'input input__search',
                    type: 'text',
                    name: 'search',
                    placeholder: 'Поиск',
                })}
            {{/if}}

            {{#if withTitle}}
                <h1 class="header__title">{{ title }}</h1>
            {{/if}}

        </div>
    </section>
`

export { chatHeaderTmpl };