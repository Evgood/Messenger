import { Props } from '../../types';
import Block from '../../utils/Block'
import { goChat } from '../../utils/events';

import ChatHeader from '../../module/chatHeader/chatHeader';

import template from './settings.hbs';
import './settings.scss';

import svg from '../../../static/images/svg';
import avatar from '../../../static/images/avatars/01.jpg';

class Settings extends Block {
    constructor(props: Props = {}) {

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
                events: {
                    click: goChat,
                }
            },
            headerTitle: 'Настройки',
        });

        const settingProps = {
            avatarUrl: avatar,
            name: 'Евгений',
            surname: 'Горохов',
            chatName: 'Женя',
            login: 'Evgoo',
            email: 'gorohovev@list.ru',
            phone: '+7 915 351-00-07',
        }

        super(
            'div',
            {
                ...props,
                ...settingProps,
                chatHeader,
            }
        );
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Settings;
