import '../../module/chatHeader/chatHeader';
import '../../module/mesageHeader/mesageHeader';
import '../../module/messageControls/messageControls';
import '../../module/mesageList/mesageList';
import '../../components/chatCard/chatCard';

import chatTmpl from "./chat.hbs";

import avatar from '../../../static/images/avatars/01.jpg';
import { svg } from '../../../static/images/svg';

const data = {
    chatHeaderContex: {
        buttonContex: {
            className: 'header__button button',
            type: 'button',
            content: svg.setting,
        },
        withInput: true,
        inputContex: {
            className: 'input input__search',
            type: 'text',
            name: 'search',
            placeholder: 'Поиск',
        }
    },
    chatCards: [
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '15:23',
                messageCount: 6,
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_active',
                avatarName: 'Дамир Юсипов',
                avatarUrl: avatar,
                message: 'Еще какое-то сообщение в две строки',
                messageTime: '12:02',
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '21:23',
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '00:00',
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '15:23',
                messageCount: 12,
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '15:23',
                messageCount: 2,
            }
        },
        {
            chatCardContex: {
                className: 'chat-card_notarget',
                avatarName: 'Кристина Нехорошкова',
                avatarUrl: avatar,
                message: 'Какое-то сообщение в две строки',
                messageTime: '00:00',
            }
        },
    ],
    mesageHeaderContex: {
        buttons: [
            {
                buttonContex: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.search,
                },
            },
            {
                buttonContex: {
                    className: 'header__button button',
                    type: 'button',
                    content: svg.menu,
                },
            },
        ],
        avatarUrl: avatar,
        avatarName: 'Дамир Юсипов',
    },
    messageControlsContex: {
        buttonAdd: {
            className: 'header__button button',
            type: 'button',
            content: svg.add,
        },
        buttonSend: {
            className: 'header__button button',
            type: 'button',
            content: svg.send,
        },
        inputMessage: {
            className: 'input input__message',
            type: 'text',
            name: 'message',
            placeholder: 'Сообщение',
        },
    }
}

const renderChat = () => {
    return chatTmpl(data);
}

export { renderChat };
