import Home from './components/home.vue';

import notification from './components/notification-launch.vue';

export default [
    { path: '/', component: Home},
    { path: '/add-notification-message', component: Notification },
    { path: '/notification-launch', component: notification },
];