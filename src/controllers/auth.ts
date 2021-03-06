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
            .then(() => {
                router.go('/messenger');
            })
            .catch((err) => alert(err.message));
    }


    public signIn(data: BodyRequest) {
        this.authAPIInstance
            .signIn(data)
            .then(() => {
                this.getUserInfo();
                chats.getChats();

                router.go('/messenger');
            })
            .catch((err) => alert(err.message));;
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
            })
            .catch((err) => alert(err.message));;
    }


    public logout() {
        this.authAPIInstance
            .logout()
            .then(() => {
                router.go('/');
            })
            .catch((err) => alert(err.message));;
    }
}

export default new AuthController();
