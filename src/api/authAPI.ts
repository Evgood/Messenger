import { Options, BodyRequest } from '../types';

import BaseAPI from './baseAPI';

class AuthAPI extends BaseAPI {

    private signUpUrl: string;
    private signInUrl: string;
    private getUserDataUrl: string;
    private logoutUrl: string;

    constructor() {
        super();

        this.signUpUrl = `${this.baseUrl}/auth/signup`;
        this.signInUrl = `${this.baseUrl}/auth/signin`;
        this.getUserDataUrl = `${this.baseUrl}/auth/user`;
        this.logoutUrl = `${this.baseUrl}/auth/logout`;
    }


    public signUp(data: BodyRequest) {
        const options: Options = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.post(this.signUpUrl, options);
    }


    public signIn(data: BodyRequest) {
        const options: Options = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.post(this.signInUrl, options);
    }


    public getUserData() {
        const options: Options = {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
        }

        return this.HTTP.get(this.getUserDataUrl, options);
    }


    public logout() {
        const options: Options = {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
        }

        return this.HTTP.post(this.logoutUrl, options);
    }
}

export default AuthAPI;