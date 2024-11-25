// router.js
import { createRouter, createWebHistory } from 'vue-router';
import CallBack from '../components/CallBack.vue'; // Tu componente de Callback
import Home from '../components/HeaderPage.vue'; // Tu página principal

const routes = [
    { 
        path: '/',
        component: Home 
    },
    {
        path: '/login/callback',
        component: CallBack 
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
