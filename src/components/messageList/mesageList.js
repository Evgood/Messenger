import Handlebars from "handlebars";

import { mesageListTmpl } from "./mesageList.tmpl"
const template = Handlebars.compile(mesageListTmpl);

const mesageList = function() {
    return template()
}

export { mesageList };