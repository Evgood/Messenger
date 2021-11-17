import { input } from '../../components/input/input';

const messageControlsTmpl = `
<section class="message-controls">
    <form class="message-controls__form">
        <button class="header__button button">
            <svg class="button__image" width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V1Z" />
                <path
                    d="M11 5C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7L1 7C0.447715 7 -2.41411e-08 6.55228 0 6C2.41411e-08 5.44771 0.447715 5 1 5L11 5Z" />
            </svg>
        </button>
        ${input({
            className: 'input input__message',
            type: 'text',
            name: 'message',
            placeholder: 'Сообщение',
        })}
        <button class="header__button button">
            <svg class="button__image_stroke" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1L1 5.94118L7.125 8.82353M15 1L10.1875 15L7.125 8.82353M15 1L7.125 8.82353"
                    stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </form>
</section>
`

export { messageControlsTmpl };