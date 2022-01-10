import { BodyRequest } from '../types';
import UsersAPI from '../api/usersAPI';
import store from '../utils/Store';

class UserController {

    private usersAPIInstance: UsersAPI;

    public constructor() {
        this.usersAPIInstance = new UsersAPI();
    }


    public changeUserAvatar(data: FormData) {
        this.usersAPIInstance
            .changeUserAvatar(data)
            .then((xhr: XMLHttpRequest) => store.setState('user', xhr.response));
    }


    public changeUserProfile(data: BodyRequest) {
        this.usersAPIInstance
            .changeUserProfile(data)
            .then((xhr: XMLHttpRequest) => store.setState('user', xhr.response));
    }


    public changeUserPassword(data: BodyRequest) {
        this.usersAPIInstance
            .changeUserPassword(data)
            .then(() => store.setState('user.changePassword', new Date()))
    }


    public getUserById(id: string) {
        return this.usersAPIInstance.getUserById(id);
    }


    public findUsersByLogin(data: BodyRequest) {
        return this.usersAPIInstance.findUsers(data);
    }
}

export default new UserController();
