import { lazy } from 'react';
import AccountSetting from '../pages/Users/AccountSetting';
const Index = lazy(() => import('../pages/Index'));
const Todolist = lazy(() => import('../pages/Apps/Todolist'));
const Contacts = lazy(() => import('../pages/Apps/Contacts'));
const Scrumboard = lazy(() => import('../pages/Apps/Scrumboard'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));
const Profile = lazy(() => import('../pages/Users/Profile'));
const Error = lazy(() => import('../components/Error'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
    },

    {
        path: '/apps/todolist',
        element: <Todolist />,
    },

    {
        path: '/apps/contacts',
        element: <Contacts />,
    },

    {
        path: '/apps/scrumboard',
        element: <Scrumboard />,
    },
    {
        path: '/apps/calendar',
        element: <Calendar />,
    },
   
    {
        path: '/users/profile',
        element: <Profile />,
    },
    {
        path: '/users/user-account-settings',
        element: <AccountSetting />,
    },
   
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
