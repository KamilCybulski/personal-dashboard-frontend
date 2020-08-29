import { todoService } from '@/services';

export default {
  namespaced: true,

  state: {
    items: {},
  },

  mutations: {
    setItems(state, payload) {
      state.items = { ...state.items, ...payload };
    },
  },

  actions: {
    async getAllItems(context) {
      const todos = await todoService.fetchAllTodos();
      context.commit('setItems', todos);
      return todos;
    },
  },
};
