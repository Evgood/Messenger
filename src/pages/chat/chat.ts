/* eslint-disable max-len */
import { Props } from '../../types';
import Block from '../../utils/Block';
import router from '../../utils/Router';
import store, { StoreEvents } from '../../utils/Store';
import { isEmpty } from '../../utils/services/isEmpty';

import chats from '../../controllers/chats';
import auth from '../../controllers/auth';
import messenger from '../../controllers/messenger';

import MessageHeader from '../../module/messageHeader/messageHeader';
import ChatHeader from '../../module/chatHeader/chatHeader';
import MessageControls from '../../module/messageControls/messageControls';
import MessageList from '../../module/messageList/messageList';

import template from './chat.hbs';
import thumb from '../../../static/images/avatars/thumb.svg';
import svg from '../../../static/images/svg';
import './chat.scss';

class Chat extends Block {
    constructor(props: Props = {}) {

        if (isEmpty(store.getState())) {
            auth.getUserInfo();
            chats.getChats();
        }

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
                events: {
                    click: () => router.go('/settings'),
                }
            },
            addButton: {
                className: 'header__button button',
                type: 'button',
                content: svg.add,
                events: {
                    click: messenger.openAddChatPopup,
                }
            },
            input: {
                className: 'input input__search',
                type: 'text',
                name: 'search',
                placeholder: 'Поиск',
            },
        })

        const messageHeader = new MessageHeader({
            buttons: {
                searchButton: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.search,
                    events: {
                        click: messenger.openAddUserToChatPopup,
                    }
                },
                menuButton: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.menu,
                    events: {
                        click: messenger.openDeleteUserFromChatPopup,
                    }
                },
            },
        });

        const messageList = new MessageList();

        const messageControls = new MessageControls({
            addButton: {
                className: 'header__button button',
                type: 'button',
                content: svg.add,
            },
            input: {
                className: 'input input__message',
                type: 'text',
                name: 'message',
                placeholder: 'Сообщение',
            },
            sendButton: {
                className: 'header__button button',
                type: 'submit',
                content: svg.send,
            },
        });

        super('div', {
            ...props,
            ...store.getState(),
            chatHeader,
            messageHeader,
            messageList,
            messageControls,
            thumb,
            events: {
                click: messenger.pageClick,
                submit: messenger.pageClick,
            },
        });

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Chat;
