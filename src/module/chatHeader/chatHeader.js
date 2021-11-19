import Handlebars from 'handlebars/dist/handlebars.runtime';

import '../../components/input/input';
import '../../components/button/button';
import template from './chatHeader.hbs';

Handlebars.registerPartial('chatHeader', template);
