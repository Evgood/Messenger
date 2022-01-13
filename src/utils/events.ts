import { Verify, FormData } from '../types'
import Validation from './Validation';
import router from './Router';
import auth from '../controllers/auth';


export const goToRegister = (event: Event): void => {
    if ((event.target as HTMLElement).className === 'form__link') {
        router.go('/sign-up');
    }
}


export const goToLogin = (event: Event): void => {
    if ((event.target as HTMLElement).className === 'form__link') {
        router.go('/');
    }
}


export const settingClick = (event: Event): void => {
    if ((event.target as HTMLElement).dataset.value === 'exit') {
        auth.logout();
    }
}


export const inputFocus = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    input.classList.remove('input_error');
}


export const inputBlur = (event: Event): void => {
    const input = event.target as HTMLInputElement;
    const verifyResult = Validation.verify(input.name, input.value);

    toggleErrorElement(input, verifyResult);
}


export const signIn = (event: Event) => {
    event.preventDefault();

    const data = validationForm();

    if (data) {
        auth.signIn(data);
    }
}


export const signUp = (event: Event) => {
    event.preventDefault();

    const data = validationForm();

    if (data) {
        auth.signUp(data);
    }
}


export const validationForm = (): FormData | void => {
    const data: FormData = {};
    const inputFields = document.querySelectorAll('.form__input');
    let validationError: number = 0;

    inputFields.forEach((input: HTMLInputElement) => {
        const { verify } = Validation.verify(input.name, input.value);
        if (!verify) validationError++;

        data[input.name] = input.value;
    });

    return (validationError === 0) ? data : undefined;
}


const createErrorElement = (message: string): HTMLElement => {
    const div = document.createElement('div');
    div.setAttribute('class', 'input__error-label');
    div.textContent = message;

    return div;
}


const toggleErrorElement = (target: HTMLInputElement, verifyResult: Verify): void => {
    if (!verifyResult.verify) {
        target.classList.add('input_error');

        if (
            target.nextElementSibling === null
            || target.nextElementSibling !== null
            && target.nextElementSibling.tagName !== 'DIV'
        ) {
            const element = createErrorElement(verifyResult.message);
            target.after(element);
        }
    }

    if (
        target.nextElementSibling !== null
        && target.nextElementSibling.tagName === 'DIV'
        && verifyResult.verify
    ) {
        target.nextElementSibling.remove();
    }
}
