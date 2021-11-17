import Handlebars from "handlebars";
import { settingsTmpl } from "./settings.tmpl";

const template = Handlebars.compile(settingsTmpl);

const renderSettings = (optional) => {
    return template(optional);
}

export { renderSettings };