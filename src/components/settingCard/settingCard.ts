import Block from '../../utils/Block';
/* @ts-ignore */
import template from './settingCard.hbs';
import './settingCard.scss';

type Props = Record<string, any>;

class SettingCard extends Block {
    constructor(props: Props = {}) {
        super("div", props);
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default SettingCard;