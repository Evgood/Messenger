import { Props } from '../../types';
import Block from '../../utils/Block'
import store, { StoreEvents } from '../../utils/Store';

import template from './popup.hbs';

class Popup extends Block {
    constructor(props: Props = {}) {
        super('div', { ...props });

        store.on(StoreEvents.Updated, () => {
            this.deleteElement();
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Popup;
