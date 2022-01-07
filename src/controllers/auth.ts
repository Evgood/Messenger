import { BodyRequest } from '../types';
import AuthAPI from '../api/authAPI';
import router from '../utils/Router';
import store from '../utils/Store';


class AuthController {

    private authAPIInstance: AuthAPI;

    public constructor() {
        this.authAPIInstance = new AuthAPI();
    }


    public signUp(data: BodyRequest) {
        this.authAPIInstance
            .signUp(data)
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    console.log(xhr.status, xhr.response);
                } else {
                    console.log(xhr.status, xhr.response);

                    router.go('/messenger');
                }
            });
    }


    public signIn(data: BodyRequest) {
        this.authAPIInstance
            .signIn(data)
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    console.log(xhr.status, xhr.response);
                } else {
                    console.log(xhr.status, xhr.response);

                    router.go('/messenger');
                }
            });
    }


    public getUserInfo() {
        this.authAPIInstance
            .getUserInfo()
            .then((xhr: XMLHttpRequest) => (
                store.setState('user', xhr.response)
            ));
    }


    public logout() {
        this.authAPIInstance
            .logout()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    console.log(xhr.status, xhr.response);
                } else {
                    console.log(xhr.status, xhr.response);
                    router.go('/');
                }
            });
    }
}

export default AuthController;
