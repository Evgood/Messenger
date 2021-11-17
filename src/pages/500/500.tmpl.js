import { error } from "../../components/error/error";

const errorTmpl = error({
    title: '500',
    message: 'Все пропало. Но мы уже чиним',
    link: '/',
    linkName: 'Начать с главной',
});

export { errorTmpl };