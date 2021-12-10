import { Verify, ValidationFields } from '../types'

/* eslint-disable max-len */
class Validation {

    private static FIELDS: ValidationFields  = {
        first_name: {
            pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
            error: 'Ведите корректное имя',
            sucsess: 'Имя корректно',
        },
        second_name: {
            pattern: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
            error: 'Ведите корректное фамилию',
            sucsess: 'Фамилия корректна',
        },
        login: {
            pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
            error: 'Ведите корректный логин',
            sucsess: 'Логин корректен',
        },
        email: {
            pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
            error: 'Ведите корректный email.',
            sucsess: 'Email корректен',
        },
        password: {
            pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
            error: 'Слабый пароль',
            sucsess: 'Надежный пароль',
        },
        phone: {
            pattern: /^[+-d]?\d{10,15}$/,
            error: 'Введите корректный номер телефона',
            sucsess: 'Номер телефона корректен',
        },
        message: {
            pattern: /(.|\s)*\S(.|\s)*/,
            error: 'Сообщение не должно быть пустым',
            sucsess: 'Сообщение не пустое',
        },
    };

    static verify(inputName: string, inputValue: string) {

        const verifyResult: Verify = {
            verify: true,
            message: ''
        };
        const pattern = Validation.FIELDS[inputName].pattern;

        if (pattern.test(inputValue)) {
            verifyResult.message = Validation.FIELDS[inputName].sucsess;
        } else {
            verifyResult.verify = false;
            verifyResult.message = Validation.FIELDS[inputName].error;
        }

        return verifyResult
    }
}

export default Validation;