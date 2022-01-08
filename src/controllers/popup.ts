import Input from '../components/input/input';
import Form from '../module/form/form';
import Popup from '../module/popup/popup';
import Block from '../utils/Block';
import { Props } from '../types';

class PopupController {

    private innerInputs: Props[] = [];
    private form: Block;

    public createPopup(props: Props): Block {
        this.createInputs(props.inputs);
        this.createForm(props)

        return new Popup({ form: this.form });
    }

    private createInputs(inputs: Props[]) {
        inputs.forEach((input) => {
            this.innerInputs.push({
                input: new Input({
                    className: input.className,
                    type: input.type,
                    name: input.name,
                    accept: input?.accept,
                    placeholder: input?.placeholder,
                })
            })
        }, []);
    }

    private createForm(props: Props) {
        this.form = new Form({
            button: {
                className: 'form__button button',
                type: 'submit',
                content: props.button.content,
            },
            formId: props.formId,
            formTitle: props.formTitle,
            events: props.events
        }, this.innerInputs)
    }
}

export default PopupController;
