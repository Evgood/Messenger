import Handlebars from "handlebars";
import { chatTmpl } from "./chat.tmpl";

const template = Handlebars.compile(chatTmpl);

const renderChat = (optional) => {
    return template(optional);
}

export { renderChat };