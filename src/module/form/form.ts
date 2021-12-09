import { Props, InnerChildren } from '../../types';
import Block from '../../utils/Block';
import { formSubmit } from '../../utils/events'

import Button from '../../components/button/button';

import template from './form.hbs';
import './form.scss';

class Form extends Block {
    constructor(props: Props = {}, innerChildren: InnerChildren = []) {

        const button = new Button({
            className: props.button.className,
            type: props.button.type,
            content: props.button.content,
        })

        super('div', {
            button,
            inputs: innerChildren,
            formTitle: props.formTitle,
            footerFormDesc: props.footerFormDesc,
            footerFormLinkName: props.footerFormLinkName,
            footerFormLinkUrl: props.footerFormLinkUrl,
            events: {
                submit: formSubmit,
            }
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Form;
