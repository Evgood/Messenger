import Handlebars from "handlebars";
import { errorTmpl } from "./error.tmpl"

const template = Handlebars.compile(errorTmpl);

const error = (options) => {
    return template(options)
}

export { error };
