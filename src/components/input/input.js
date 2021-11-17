import Handlebars from "handlebars";
import { inputTmpl } from "./input.tmpl"

const template = Handlebars.compile(inputTmpl);

const input = (options) => {
    return template(options)
}

export { input };
