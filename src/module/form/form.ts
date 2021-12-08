import { Props, InnerChildren } from '../../types';
import Button from '../../components/button/button';
import Block from '../../utils/Block';
import template from './form.hbs';
import './form.scss';

class Form extends Block {
    constructor(props: Props = {}, innerChildren: InnerChildren = []) {

        const eventSubmit = (event: Event) => {
            event.preventDefault();

            const data: Record<string, string> = {};
            const inputFields = document.querySelectorAll('.form__input');

            inputFields.forEach((input: HTMLInputElement) => {
                data[input.name] = input.value
            });

            console.log(data);
        }

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
                submit: eventSubmit,
            }
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Form;
