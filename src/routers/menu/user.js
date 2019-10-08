
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/user/login.vue');

export default {
    name: '登录',
    contents: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]

};
