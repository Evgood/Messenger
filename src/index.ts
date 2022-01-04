import './styles/index.scss';

import Router from './utils/Router';

import Chat from './pages/chat/chat';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ErrorPage from './pages/error/error';
import Settings from './pages/settings/settings';

const router = new Router();

router
    .use('/', Login)
    .use('/login', Login)
    .use('/register', Register)
    .use('/chat', Chat)
    .use('/settings', Settings)
    .use('/500', ErrorPage, { code: 500 })
    .use('/404', ErrorPage, { code: 404 })
    .start();
    