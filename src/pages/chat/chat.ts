import MessageHeader from '../../module/messageHeader/messageHeader';
import ChatHeader from '../../module/chatHeader/chatHeader';
import СhatCard from '../../components/chatCard/chatCard';
import Block from '../../utils/Block'
/* @ts-ignore */
import template from './chat.hbs';
import { svg } from '../../../static/images/svg';
/* @ts-ignore */
import avatar from '../../../static/images/avatars/01.jpg';
import MessageControls from '../../module/messageControls/messageControls';
import MessageList from '../../module/messageList/messageList';

type Props = Record<string, any>;

class Chat extends Block {
    constructor(props: Props = {}) {

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
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

        const messageList = new MessageList({
            button: {
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
        });

        const messageControls = new MessageControls({
            button: {
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
        });

        super("div", {
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