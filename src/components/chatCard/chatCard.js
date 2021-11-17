import Handlebars from "handlebars";
import { chatCardTmpl } from "./chatCard.tmpl"

const template = Handlebars.compile(chatCardTmpl);

const chatCard = (options) => {
    return template(options)
}

export { chatCard };
