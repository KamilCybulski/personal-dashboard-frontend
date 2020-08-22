import { userService } from '@/services';

export default {
  state: {
    isAuthenticated: false,
    details: null,
  },

  mutations: {
    markAsAuthenticated(state) {
      state.isAuthenticated = true;
    },

    setUserData(state, payload) {
      state.details = payload;
    },
  },

  actions: {
    async signIn(context, payload) {
      const { name, password } = payload;

      const result = await userService.signIn(name, password);
      context.commit('markAsAuthenticated', result);
    },
  },
};
