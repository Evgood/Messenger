import Handlebars from "handlebars";

import { errorTmpl } from "./500.tmpl"
const template = Handlebars.compile(errorTmpl);

const renderError500 = (optional) => {
    return template(optional);
}

export { renderError500 };