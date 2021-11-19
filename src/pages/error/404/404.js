import '../../../components/error/error'
import errorTmpl from './404.hbs';

const data = {
    errorContext: {
        title: '404',
        message: 'Кажется такой страницы нет',
        linkName: 'Начать с главной',
        linkUrl: '/',
    }
}

const renderError404 = () => {
    return errorTmpl(data);
}

export { renderError404 };