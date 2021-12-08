import ChatHeader from '../../module/chatHeader/chatHeader';
import Block from '../../utils/Block'
/* @ts-ignore */
import template from './settings.hbs';
import './settings.scss';

import { svg } from '../../../static/images/svg';
/* @ts-ignore */
import avatar from '../../../static/images/avatars/01.jpg';

type Props = Record<string, any>;

class Settings extends Block {
    constructor(props: Props = {}) {

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
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
            "div",
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