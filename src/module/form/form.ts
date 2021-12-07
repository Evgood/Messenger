import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Block from '../../utils/Block';
/* @ts-ignore */
import template from './form.hbs';
import './form.scss';

type Props = Record<string, any>;
type Children = Record<string, Block>[];

class Form extends Block {
    constructor(props: Props = {}, innerChildren: Children = []) {

        const button = new Button({
            className: props.button.className,
            type: props.button.type,
            content: props.button.content,
        })

        super("div", {
            button,
            inputs: innerChildren,
            formTitle: props.formTitle,
            footerFormDesc: props.footerFormDesc,
            footerFormLinkName: props.footerFormLinkName,
            footerFormLinkUrl: props.footerFormLinkUrl,
        });
    }

    render() {
        return this.setTemplate(template, this.props);
    }
}

export default Form;