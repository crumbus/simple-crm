import HomePage from '../../components/HomePage';
import Login from '../../components/pages/auth/Login';
import Register from '../../components/pages/auth/Register';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    }
];
