import './styles/index.scss';

import renderDOM from './utils/renderDom'
import Chat from './pages/chat/chat';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ErrorPage from './pages/error/error';

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
        renderDOM('#root', new ErrorPage({ code: 500 }));
        break;
    default:
        renderDOM('#root', new ErrorPage({ code: 404 }));
}