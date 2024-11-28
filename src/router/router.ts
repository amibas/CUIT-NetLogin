import {createRouter, createWebHistory} from 'vue-router';
import loginView from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: loginView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
