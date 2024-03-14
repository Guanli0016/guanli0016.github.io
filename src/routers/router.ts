import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    }, {
        path: '/about',
        component: () => import('@/pages/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;