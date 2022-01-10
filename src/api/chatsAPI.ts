import { Options, BodyRequest } from '../types';

import BaseAPI from './baseAPI';

class ChatsAPI extends BaseAPI {

    private chatsUrl: string;
    private usersChatUrl: string;
    private tokenUrl: string;

    public constructor() {
        super();

        this.chatsUrl = `${this.baseUrl}/chats`;
        this.usersChatUrl = `${this.baseUrl}/chats/users`;
        this.tokenUrl = `${this.baseUrl}/chats/token`;
    }


    public getChats(data: BodyRequest) {
        const options: Options = {
            method: 'GET',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            data: data
        }

        return this.HTTP.get(this.chatsUrl, options);
    }


    public createChat(data: BodyRequest) {
        const options: Options = {
            method: 'POST',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.post(this.chatsUrl, options);
    }


    public addUserToChat(data: BodyRequest) {
        const options: Options = {
            method: 'PUT',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.put(this.usersChatUrl, options);
    }


    public deleteUserFromChat(data: BodyRequest) {
        const options: Options = {
            method: 'DELETE',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: data
        }

        return this.HTTP.delete(this.usersChatUrl, options);
    }


    public getChatToken(id: string) {
        const options: Options = {
            method: 'POST',
            credentials: true,
            headers: {
                'content-type': 'application/json',
            },
            body: {}
        }

        return this.HTTP.post(`${this.tokenUrl}/${id}`, options);
    }
}

export default ChatsAPI;
