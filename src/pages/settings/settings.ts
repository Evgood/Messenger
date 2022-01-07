import { Props } from '../../types';
import Block from '../../utils/Block'
import store, { StoreEvents } from '../../utils/Store';
import { settingClick } from '../../utils/events';
import router from '../../utils/Router';
import AuthController from '../../controllers/auth';

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
                click: settingClick,
            }
        };

        super('div', { ...props, ...settingProps, ...store.getState(), chatHeader });

        const auth = new AuthController();
        auth.getUserInfo();

        store.on(StoreEvents.Updated, () => {
            this.setProps(store.getState());
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Settings;
