import './styles/index.scss';

import renderDOM from './utils/renderDom'
import Chat from './pages/chat/chat';

const path: string = window.location.pathname;

switch (path) {
    case '/':
        // TODO renderDOM('#root', new Login());
        break;
    case '/login':
        // TODO renderDOM('#root', new Login());
        break;
    case '/register':
        // TODO renderDOM('#root', new Register());
        break;
    case '/chat':
        renderDOM('#root', new Chat());
        break;
    case '/settings':
        // TODO renderDOM('#root', new Settings());
        break;
    case '/500':
        // TODO renderDOM('#root', new Error());
        break;
    default:
        // TODO renderDOM('#root', new Error());
}