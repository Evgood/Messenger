import Handlebars from "handlebars/dist/handlebars.runtime";

import './form.scss';
import '../../components/input/input';
import '../../components/button/button';
import template from "./form.hbs";

Handlebars.registerPartial("form", template);
