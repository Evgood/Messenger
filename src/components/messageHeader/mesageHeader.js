import Handlebars from "handlebars";
import { mesageHeaderTmpl } from "./mesageHeader.tmpl"

const template = Handlebars.compile(mesageHeaderTmpl);

const mesageHeader = function(options) {
    return template(options)
}

export { mesageHeader };