import { userService } from '@/services';

export default {
  state: {
    isAuthenticated: false,
    authStateChecked: false,
    details: null,
  },

  mutations: {
    markAuthStateAsChecked(state) {
      state.authStateChecked = true;
    },

    setUserData(state, payload) {
      state.details = payload;
      state.isAuthenticated = true;
      state.authStateChecked = true;
    },
  },

  actions: {
    async checkUser(context) {
      try {
        const userData = await userService.getUser();
        context.commit('setUserData', userData);
      } catch {
        context.commit('markAuthStateAsChecked');
      }
    },

    async signIn(context, payload) {
      const { name, password } = payload;

      try {
        await userService.signIn(name, password);
        const userData = await userService.getUser();
        context.commit('setUserData', userData);
      } catch {
        context.commit('markAuthStateAsChecked');
      }
    },
  },
};
