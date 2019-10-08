import Vue from 'vue';
import Router from 'vue-router';
import menuModule from './router';
Vue.use(Router);
import Index from '@/views/index.vue';
const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: '玉溪首页'
            },
        },
        {
            path: '*',
            name: 'error_404',
            component: () =>
                import ('@/views/error/error_404.vue')
        },
        {
            path: '/unauthorized',
            name: 'error_401',
            component: () =>
                import ('@/views/error/error_401.vue')
        },
        ...generateRoutesFromMenu(menuModule.state.contents)
    ]
});

/**
 *
 *
 * @param {any} [menu=[]]
 * @param {any} [routes=[]]
 * @returns
 */
function generateRoutesFromMenu(menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[i];
        if (item.path) {
            routes.push(item);
        }
        if (!item.component) {
            generateRoutesFromMenu(item.contents, routes);
        }
    }
    return routes;
}

/**
 *
 */
// const DEFAULT_PAGE_NAME = ['login', 'register']; //若已登录成功状态不可查看，未登录状态可以访问
router.beforeEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});

export default router;
