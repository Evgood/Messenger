import { BodyRequest } from '../types';
import AuthAPI from '../api/authAPI';
import router from '../utils/Router';
import store from '../utils/Store';
import chats from '../controllers/chats'

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
                    new Error(`Код: ${xhr.status}. Ответ сервера: ${xhr.response}`)
                } else {
                    router.go('/messenger');
                }
            });
    }


    public signIn(data: BodyRequest) {
        this.authAPIInstance
            .signIn(data)
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    new Error(`Код: ${xhr.status}. Ответ сервера: ${xhr.response}`)
                } else {
                    this.getUserInfo();
                    chats.getChats();

                    router.go('/messenger');
                }
            });
    }


    public getUserInfo() {
        this.authAPIInstance
            .getUserInfo()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    router.go('/');
                } else {
                    store.setState('user', xhr.response)
                }
            });
    }


    public logout() {
        this.authAPIInstance
            .logout()
            .then((xhr: XMLHttpRequest) => {
                if (xhr.status != 200) {
                    new Error(`Код: ${xhr.status}. Ответ сервера: ${xhr.response}`)
                } else {
                    router.go('/');
                }
            });
    }
}

export default new AuthController();
