import { BodyRequest } from '../types';
import AuthAPI from '../api/authAPI';
import Router from '../utils/Router';


class AuthController {

    private authAPIInstance: AuthAPI;
    private router: Router;

    public constructor() {
        this.authAPIInstance = new AuthAPI();
        this.router = new Router();
    }


    public signUp(data: BodyRequest) {
        this.authAPIInstance
            .signUp(data)
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    console.log(xhr.status, xhr.response);
                } else {
                    console.log(xhr.status, xhr.response);

                    this.router.go('/chat');
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

                    this.router.go('/chat');
                }
            });
    }


    public getUserInfo() {
        this.authAPIInstance
            .getUserInfo()
            .then((xhr: XMLHttpRequest) => {
                console.log(xhr.status, xhr.response);
            });
    }


    public logout() {
        this.authAPIInstance
            .logout()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    console.log(xhr.status, xhr.response);
                } else {
                    console.log(xhr.status, xhr.response);
                    this.router.go('/login');
                }
            });
    }
}

export default AuthController;
