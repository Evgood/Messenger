import Handlebars from "handlebars";

import { loginTmpl } from "./login.tmpl"
const template = Handlebars.compile(loginTmpl);

const renderLogin = (optional) => {
    return template(optional);
}

export { renderLogin };