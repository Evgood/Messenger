import Handlebars from "handlebars";

import { registerTmpl } from "./register.tmpl"
const template = Handlebars.compile(registerTmpl);

const renderRegister = (optional) => {
    return template(optional);
}

export { renderRegister };