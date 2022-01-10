import { Props } from '../../types';
import Block from '../../utils/Block'
import store, { StoreEvents } from '../../utils/Store';
import router from '../../utils/Router';
import { isEmpty } from '../../utils/services/isEmpty';

import auth from '../../controllers/auth';
import chats from '../../controllers/chats';
import settingsController from '../../controllers/settings';

import ChatHeader from '../../module/chatHeader/chatHeader';

import template from './settings.hbs';
import './settings.scss';
import svg from '../../../static/images/svg';

class Settings extends Block {
    constructor(props: Props = {}) {

        const chatHeader = new ChatHeader({
            button: {
                className: 'header__button button',
                type: 'button',
                content: svg.setting,
                events: {
                    click: () => router.go('/messenger'),
                }
            },
            headerTitle: 'Настройки',
        });

        const settingProps = {
            events: {
                click: settingsController.pageClick,
            }
        };

        super('div', { ...props, ...settingProps, ...store.getState(), chatHeader });

        // auth.getUserInfo();
        if (isEmpty(store.getState())) {
            auth.getUserInfo();
            chats.getChats();
        }
        
        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Settings;
