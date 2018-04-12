import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

const Home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const Sort = r => require.ensure([], () => r(require('@/pages/sort/sort')), 'sort');

const router = new Router({

    routes: [
        {
            path: '/',
            meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            component: Home
        },
        {
            path: '/home',
            meta: {
              requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            component: Home
        },
        {
            path: '/sort',
            component: Sort
        }
    ]
});

export default router;
