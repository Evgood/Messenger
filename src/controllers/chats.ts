/* eslint-disable max-len */
import { BodyRequest, Props } from '../types';
import ChatsAPI from '../api/chatsAPI';
import store from '../utils/Store';
import users from './users';
import messenger from './messenger';
import Socket from '../utils/Soket';


class ChatsController {

    private chatsAPIInstance: ChatsAPI;

    public constructor() {
        this.chatsAPIInstance = new ChatsAPI();
    }


    public getChats(data: BodyRequest = {}) {
        this.chatsAPIInstance
            .getChats(data)
            .then((xhr: XMLHttpRequest) => store.setState('chats', xhr.response))
            .then(() => {
                store.getState().chats.forEach((chat: Props) => {
                    this.getChatToken(chat.id)
                        .then((token) => {
                            const socket = new Socket(store.getState().user.id, chat.id, token);

                            socket.message(() => {
                                messenger.messageListener();
                            })

                            store.setState(`socket.${chat.id}`, socket);
                        })
                })
            });
    }


    public createChat(data: BodyRequest) {
        this.chatsAPIInstance
            .createChat(data)
            .then(() => this.getChats())
    }


    public getChatToken(id: string) {
        return this.chatsAPIInstance
            .getChatToken(id)
            .then((xhr: XMLHttpRequest) => xhr.response.token)
    }


    public addUserToChat(data: BodyRequest) {
        users
            .findUsersByLogin(data)
            .then((xhr: XMLHttpRequest) => xhr.response[0])
            .then((response) => {
                const data = {
                    users: [response.id],
                    chatId: store.getState().currentChats.id
                }
                this.chatsAPIInstance
                    .addUserToChat(data)
                    .then(() => store
                        .setState(`currentChats.users.${response.login}`, response.id))
            })
    }


    public deleteUserFromChat(data: BodyRequest) {
        users
            .findUsersByLogin(data)
            .then((xhr: XMLHttpRequest) => xhr.response[0])
            .then((response) => {
                const data = {
                    users: [response.id],
                    chatId: store.getState().currentChats.id
                }
                this.chatsAPIInstance
                    .deleteUserFromChat(data)
                    .then(() => store
                        .setState(`currentChats.users.${response.login}`, response.id))
            })
    }
}

export default new ChatsController();
