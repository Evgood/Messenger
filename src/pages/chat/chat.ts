/* eslint-disable max-len */
import { Props } from '../../types';
import Block from '../../utils/Block';
import { goSetting } from '../../utils/events';

import MessageHeader from '../../module/messageHeader/messageHeader';
import ChatHeader from '../../module/chatHeader/chatHeader';
import MessageControls from '../../module/messageControls/messageControls';
import MessageList from '../../module/messageList/messageList';
import СhatCard from '../../components/chatCard/chatCard';
import Message from '../../components/message/message';

import template from './chat.hbs';
import avatar from '../../../static/images/avatars/01.jpg';
import svg from '../../../static/images/svg';

class Chat extends Block {
    constructor(props: Props = {}) {

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
                events: {
                    click: goSetting,
                }
            },
            input: {
                className: 'input input__search',
                type: 'text',
                name: 'search',
                placeholder: 'Поиск',
            },
        })

        const chatCards = [
            {
                chatCard: new СhatCard({
                    className: 'chat-card_notarget',
                    avatarName: 'Кристина Нехорошкова',
                    avatarUrl: avatar,
                    message: 'Какое-то сообщение в две строки',
                    messageTime: '15:23',
                    messageCount: 6,
                })
            },
            {
                chatCard: new СhatCard({
                    className: 'chat-card_active',
                    avatarName: 'Дамир Юсипов',
                    avatarUrl: avatar,
                    message: 'Еще какое-то сообщение в две строки',
                    messageTime: '12:02',
                })
            },
            {
                chatCard: new СhatCard({
                    className: 'chat-card_notarget',
                    avatarName: 'Кристина Нехорошкова',
                    avatarUrl: avatar,
                    message: 'Какое-то сообщение в две строки',
                    messageTime: '21:23',
                })
            },
            {
                chatCard: new СhatCard({
                    className: 'chat-card_notarget',
                    avatarName: 'Кристина Нехорошкова',
                    avatarUrl: avatar,
                    message: 'Какое-то сообщение в две строки',
                    messageTime: '15:23',
                    messageCount: 12,
                })
            },
        ];

        const messageHeader = new MessageHeader({
            buttons: {
                searchButton: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.search,
                },
                menuButton: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.menu,
                },
            },
            avatarUrl: avatar,
            avatarName: 'Дамир Юсипов',
        });

        const innerMessage = [
            {
                message: new Message({
                    src: avatar,
                    name: 'Карина Терехова',
                    time: '15:46',
                    text: 'Позвонил на основной номер, хочет продать свою 3к и купить две своим детям.',
                })
            },
            {
                message: new Message({
                    src: avatar,
                    name: 'Дамир Юсипов',
                    time: '15:51',
                    text: 'Спасибо, Карина. Взял в работу',
                })
            },
            {
                message: new Message({
                    src: avatar,
                    name: 'Дамир Юсипов',
                    time: '15:52',
                    text: 'Что-то еще нужно?',
                })
            },
        ]

        const messageList = new MessageList({}, innerMessage);

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
            chatHeader,
            chatCards,
            messageHeader,
            messageList,
            messageControls
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Chat;
