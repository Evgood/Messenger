import '../../../components/error/error'
import errorTmpl from "./500.hbs";

const data = {
    errorContex: {
        title: '500',
        message: 'Все пропало. Но мы уже чиним',
        linkName: 'Начать с главной',
        linkUrl: '/',
    }
}

const renderError500 = () => {
    return errorTmpl(data);
}

export { renderError500 };