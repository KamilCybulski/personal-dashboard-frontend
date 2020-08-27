import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import { ACCESS_TOKEN_KEY } from '@/services';

Vue.use(VueRouter);

export const ROUTE_NAMES = {
  main: 'Main',
  signin: 'Signin',
  signup: 'Signup',
  todos: 'Todos',
  notes: 'Notes',
  chat: 'Chat',
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
    children: [
      {
        path: '',
        name: ROUTE_NAMES.todos,
        component: () => import('@/views/Todos.vue'),
      },
      {
        path: 'notes',
        name: ROUTE_NAMES.notes,
        component: () => import('@/views/Notes.vue'),
      },
      {
        path: 'chat',
        name: ROUTE_NAMES.chat,
        component: () => import('@/views/Chat.vue'),
      },
    ],
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
  const requiresAuthentication = ![ROUTE_NAMES.signup, ROUTE_NAMES.signin].includes(to.name);

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
