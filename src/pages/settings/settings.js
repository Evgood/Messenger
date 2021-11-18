import '../../module/chatHeader/chatHeader';
import '../../components/settingCard/settingCard'

import avatar from '../../../static/images/avatars/01.jpg';
import { svg } from '../../../static/images/svg';

import settingsTmpl from "./settings.hbs";

const data = {
    chatHeaderContex: {
        buttonContex: {
            className: 'header__button button',
            type: 'button',
            content: svg.setting,
        },
        withHeaderTitle: true,
        headerTitle: 'Настройки'
    },
    settingCard: [
        {
            settingCardContex: {
                cardLine: [
                    {
                        withAvatar: true,
                        avatarSrc: avatar
                    },
                ],
            },
        },
        {
            settingCardContex: {
                cardLine: [
                    {
                        label: 'Имя',
                        value: 'Евгений',
                    },
                    {
                        label: 'Фамилия',
                        value: 'Горохов',
                    },
                    {
                        label: 'Имя в чате',
                        value: 'Женя',
                    },
                ],
            },
        },
        {
            settingCardContex: {
                cardLine: [
                    {
                        label: 'Логин',
                        value: 'Evgoo',
                    },
                    {
                        label: 'Почта',
                        value: 'gorohovev@list.ru',
                    },
                    {
                        label: 'Телефон',
                        value: '+7 915 351-00-07',
                    },
                ],
            },
        },
        {
            settingCardContex: {
                cardLine: [
                    {
                        withLink: true,
                        className: 'Evgoo',
                        linkUrl: '#',
                        linkName: 'Изменить пароль',
                    },
                    {
                        withLink: true,
                        className: 'setting__link_exit',
                        linkUrl: '#',
                        linkName: 'Выйти',
                    },
                ],
            },
        },
    ]

}

const renderSettings = () => {
    return settingsTmpl(data);
}

export { renderSettings };