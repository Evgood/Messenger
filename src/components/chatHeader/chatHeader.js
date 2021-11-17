import Handlebars from "handlebars";
import { chatHeaderTmpl } from "./chatHeader.tmpl"

const template = Handlebars.compile(chatHeaderTmpl);

const chatHeader = (options) => {
    return template(options)
}

export { chatHeader };
