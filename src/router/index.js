import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const ROUTE_NAMES = {
  main: 'Main',
  login: 'Login',
  signup: 'Signup',
};

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: ROUTE_NAMES.main,
    component: () => import('@/views/Main.vue'),
  },
  {
    path: '/login',
    name: ROUTE_NAMES.login,
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/signup',
    name: ROUTE_NAMES.signup,
    component: () => import('@/views/Signup.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
