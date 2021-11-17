import { error } from "../../components/error/error";

const errorTmpl = error({
    title: '404',
    message: 'Кажется такой страницы нет',
    link: '/',
    linkName: 'Начать с главной',
});

export { errorTmpl };