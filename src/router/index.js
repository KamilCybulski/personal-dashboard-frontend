import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const ROUTE_NAMES = {
  main: 'Main',
  signin: 'Signin',
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
    path: '/signin',
    name: ROUTE_NAMES.signin,
    component: () => import('@/views/Signin.vue'),
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
