import Handlebars from "handlebars";
import { messageControlsTmpl } from "./messageControls.tmpl"

const template = Handlebars.compile(messageControlsTmpl);

const messageControls = function(options) {
    return template(options)
}

export { messageControls };
