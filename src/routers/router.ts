import { RouteRecordRaw, Router, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    }, {
        path: '/family',
        component: () => import('@/pages/Family.vue')
    }, {
        path: '/article',
        component: () => import('@/pages/Article.vue')
    }, {
        path: '/photo',
        component: () => import('@/pages/Photo.vue')
    }, {
        path: '/resume',
        component: () => import('@/pages/Resume.vue')
    }, {
        path: '/about',
        component: () => import('@/pages/About.vue')
    }, {
        path: '/:catchAll(.*)',
        component: () => import('@/pages/404.vue')
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;