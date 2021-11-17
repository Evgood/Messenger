import './index.scss';

import { renderLogin } from './pages/login/login';
import { renderRegister } from './pages/register/register';
import { renderChat } from './pages/chats/chat';
import { renderSettings } from './pages/settings/settings';
import { renderError404 } from './pages/404/404';
import { renderError500 } from './pages/500/500';

const root = document.querySelector("#root");
const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = renderLogin();
        break;
    case '/login':
        root.innerHTML = renderLogin();
        break;
    case '/register':
        root.innerHTML = renderRegister();
        break;
    case '/chat':
        root.innerHTML = renderChat();
        break;
    case '/settings':
        root.innerHTML = renderSettings();
        break;
    case '/500':
        root.innerHTML = renderError500();
        break;
    default:
        root.innerHTML = renderError404();
}