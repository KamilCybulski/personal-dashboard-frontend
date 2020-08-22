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
    async getUser(context) {
      const result = await userService.getUser();
      context.commit('setUserData', result);
    },

    async signIn(context, payload) {
      const { name, password } = payload;

      const result = await userService.signIn(name, password);
      await context.dispatch('getUser');
      context.commit('markAsAuthenticated', result);
    },
  },
};
