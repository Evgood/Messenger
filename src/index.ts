import './styles/index.scss';

import router from './utils/Router';

import Chat from './pages/chat/chat';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ErrorPage from './pages/error/error';
import Settings from './pages/settings/settings';

router
    .use('/', Login)
    .use('/sign-up', Register)
    .use('/messenger', Chat)
    .use('/settings', Settings)
    .use('/500', ErrorPage, { code: 500 })
    .use('/404', ErrorPage, { code: 404 })
    .start();
    