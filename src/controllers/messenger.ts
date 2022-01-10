/* eslint-disable max-len */
/* eslint-disable indent */
import { Props } from '../types';
import renderDOM from '../utils/services/renderDom';

import PopupController from './popup';
import chats from './chats';
import users from './users';
import store from '../utils/Store';

class MessengerController {

    public pageClick(event: Event): void {
        //@ts-ignore
        if (event.target.dataset.value === 'closePopup') {
            //@ts-ignore
            event.target.remove();
        }

        //@ts-ignore
        if (event.target.dataset.value === 'messageForm') {
            //@ts-ignore
            event.preventDefault();

            const id = store.getState().currentChats.id;
            const sockets = store.getState().socket;
            let socket;

            Object.entries(sockets).forEach(([key, value]) => {
                if (key === id) socket = value;
            })

            //@ts-ignore
            socket.send({
                //@ts-ignore
                content: event.target[1].value,
                type: 'message',
            });
            
            //@ts-ignore
            event.target[1].value = '';
        }

        //@ts-ignore
        if (event.target.closest('[data-value="chats"]').dataset.value === 'chats') {

            //@ts-ignore
            const id = event.target.closest('[data-value="chats"]').dataset.id;
            //@ts-ignore
            const title = event.target.closest('[data-value="chats"]').dataset.title;
            //@ts-ignore
            const avatar = event.target.closest('[data-value="chats"]').dataset.avatar;

            let socket;
            const sockets = store.getState().socket;

            Object.entries(sockets).forEach(([key, value]) => {
                if (key === id) socket = value;
            })

            //@ts-ignore
            socket.send({
                content: '0',
                type: 'get old',
            });

            store.setState('currentChats', { id, title, avatar });
        }
    }


    public openAddChatPopup() {
        const popup = new PopupController();
        const addChatPopup = popup.createPopup({
            formId: 'addChatForm',
            formTitle: 'Создать чат',
            events: {
                submit: (event: Event) => {
                    event.preventDefault();

                    const addChatForm = document.getElementById('addChatForm') as HTMLFormElement;
                    const formData: Props = {};

                    new FormData(addChatForm).forEach((value, key) => {
                        formData[key] = value;
                    });

                    chats.createChat(formData);
                }
            },
            inputs: [
                {
                    className: 'input form__input',
                    type: 'text',
                    name: 'title',
                    placeholder: 'Имя чата',
                },
            ],
            button: {
                content: 'Создать чат',
            },
        });

        renderDOM('main', addChatPopup);
    }


    public openAddUserToChatPopup() {
        const popup = new PopupController();
        const addUserToChatPopup = popup.createPopup({
            formId: 'addUserToChatForm',
            formTitle: 'Добавить пользователя',
            events: {
                submit: (event: Event) => {
                    event.preventDefault();

                    const addUserToChatForm = document.getElementById('addUserToChatForm') as HTMLFormElement;
                    const formData: Props = {};

                    new FormData(addUserToChatForm).forEach((value, key) => {
                        formData[key] = value;
                    });

                    chats.addUserToChat(formData);
                }
            },
            inputs: [
                {
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин пользователя',
                },
            ],
            button: {
                content: 'Добавить',
            },
        });

        renderDOM('main', addUserToChatPopup);
    }


    public openDeleteUserFromChatPopup() {
        const popup = new PopupController();
        const deleteUserFromChatPopup = popup.createPopup({
            formId: 'deleteUserFromChatForm',
            formTitle: 'Удалить пользователя',
            events: {
                submit: (event: Event) => {
                    event.preventDefault();

                    const deleteUserFromChatForm = document.getElementById('deleteUserFromChatForm') as HTMLFormElement;
                    const formData: Props = {};

                    new FormData(deleteUserFromChatForm).forEach((value, key) => {
                        formData[key] = value;
                    });

                    chats.deleteUserFromChat(formData);
                }
            },
            inputs: [
                {
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин пользователя',
                },
            ],
            button: {
                content: 'Удалить',
            },
        });

        renderDOM('main', deleteUserFromChatPopup);
    }


    public messageListener() {
        //@ts-ignore
        const data = JSON.parse(event.data);

        if (data.type === 'message') {
            this.addMessage(data);
        }

        if (Array.isArray(data)) {
            this.addMessagesArray(data);
        }
    }

    private addMessagesArray(data: Props[]) {
        let prepareMessages: { time: string; avatar: string; name: string; content: any; }[] = [];

        data.forEach((message) => {
            // User
            let first_name: string;
            let second_name: string;
            let display_name: string;
            let avatar: string;
            const userId: string = message.user_id;

            // Date
            const date = new Date(message.time).toLocaleDateString();
            const hours = new Date(message.time).getHours();
            const minutes = new Date(message.time).getMinutes();

            // Text
            const content = message.content;

            // Get user
            users
                .getUserById(userId)
                .then((xhr: XMLHttpRequest) => {
                    avatar = xhr.response.avatar;
                    first_name = xhr.response.first_name;
                    second_name = xhr.response.second_name;
                    display_name = (xhr.response.display_name)
                        ? xhr.response.display_name
                        : `${first_name} ${second_name}`;

                    prepareMessages.push({
                        time: `${hours}:${minutes} ${date}`,
                        avatar: avatar,
                        name: display_name,
                        content: content,
                    });
                })
                .then(() => {
                    if (prepareMessages.length == data.length) {
                        store.setState('messages', prepareMessages);
                    }
                });
        })
    }


    private addMessage(message: { user_id: string; time: string | number | Date; content: any; }) {
        let messagesArray = store.getState().messages;

        // User
        let first_name: string;
        let second_name: string;
        let display_name: string;
        let avatar: string;
        const userId: string = message.user_id;

        // Date
        const date = new Date(message.time).toLocaleDateString();
        const hours = new Date(message.time).getHours();
        const minutes = new Date(message.time).getMinutes();

        // Text
        const content = message.content;

        // Get user
        users
            .getUserById(userId)
            .then((xhr: XMLHttpRequest) => {
                avatar = xhr.response.avatar;
                first_name = xhr.response.first_name;
                second_name = xhr.response.second_name;
                display_name = (xhr.response.display_name)
                    ? xhr.response.display_name
                    : `${first_name} ${second_name}`;

                messagesArray.unshift({
                    time: `${hours}:${minutes} ${date}`,
                    avatar: avatar,
                    name: display_name,
                    content: content,
                });
            })
            .then(() => {
                store.setState('messages', messagesArray);
            });
    }
}

export default new MessengerController();
