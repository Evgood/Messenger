import { Options, BodyRequest } from '../types';

import BaseAPI from './baseAPI';

class AuthAPI extends BaseAPI {

    private signUpUrl: string;
    private signInUrl: string;
    private getUserInfoUrl: string;
    private logoutUrl: string;

    public constructor() {
        super();

        this.signUpUrl = `${this.baseUrl}/auth/signup`;
        this.signInUrl = `${this.baseUrl}/auth/signin`;
        this.getUserInfoUrl = `${this.baseUrl}/auth/user`;
        this.logoutUrl = `${this.baseUrl}/auth/logout`;
    }


    public signUp(data: BodyRequest) {
        const options: Options = {
            method: 'POST',
            credentials: true,
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
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.post(this.signInUrl, options);
    }


    public getUserInfo() {
        const options: Options = {
            method: 'GET',
            credentials: true,
        }

        return this.HTTP.get(this.getUserInfoUrl, options);
    }


    public logout() {
        const options: Options = {
            method: 'POST',
            credentials: true,
            body: {}
        }

        return this.HTTP.post(this.logoutUrl, options);
    }
}

export default AuthAPI;
