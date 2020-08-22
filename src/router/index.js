import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import { ACCESS_TOKEN_KEY } from '@/services';

Vue.use(VueRouter);

export const ROUTE_NAMES = {
  main: 'Main',
  signin: 'Signin',
  signup: 'Signup',
};

const AUTH_ROUTES = [
  ROUTE_NAMES.main,
];

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

router.beforeEach(async (to, from, next) => {
  const isTokenSaved = localStorage.getItem(ACCESS_TOKEN_KEY);
  const requiresAuthentication = AUTH_ROUTES.includes(to.name);

  if (!store.state.user.authStateChecked && isTokenSaved) {
    await store.dispatch('checkUser').catch(() => null);
  }

  if (requiresAuthentication) {
    return store.state.user.isAuthenticated
      ? next()
      : next({ name: ROUTE_NAMES.signin });
  }

  return store.state.user.isAuthenticated ? next({ name: ROUTE_NAMES.main }) : next();
});

export default router;
