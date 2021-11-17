import Handlebars from "handlebars";

import { errorTmpl } from "./404.tmpl"
const template = Handlebars.compile(errorTmpl);

const renderError404 = (optional) => {
    return template(optional);
}

export { renderError404 };