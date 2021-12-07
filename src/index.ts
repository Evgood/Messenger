import './styles/index.scss';

import renderDOM from './utils/renderDom'
import Chat from './pages/chat/chat';
import Login from './pages/login/login';
import Register from './pages/register/register';

const path: string = window.location.pathname;

switch (path) {
    case '/':
        renderDOM('#root', new Login());
        break;
    case '/login':
        renderDOM('#root', new Login());
        break;
    case '/register':
        renderDOM('#root', new Register());
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