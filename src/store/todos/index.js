import { todoService } from '@/services';

export default {
  namespaced: true,

  state: {
    items: {},
  },

  mutations: {
    setItems(state, payload) {
      const newItems = {};

      if (Array.isArray(payload)) {
        payload.forEach((item) => {
          newItems[item.id] = item;
        });
      } else {
        newItems[payload.id] = payload;
      }

      state.items = { ...state.items, ...newItems };
    },

    removeItem(state, payload) {
      const updatedItems = { ...state.items };
      delete updatedItems[payload];

      state.items = updatedItems;
    },

    setAllItemsPositions(state, payload) {
      payload.forEach(({ id }, index) => {
        state.items[id].position = index;
      });
    },
  },

  actions: {
    async getAllTodos(context) {
      const todos = await todoService.fetchAllTodos();
      context.commit('setItems', todos);
      return todos;
    },

    async addTodo(context, payload) {
      const addedTodo = await todoService.addTodo(payload);
      context.commit('setItems', addedTodo);
      return addedTodo;
    },

    async updateStatus(context, payload) {
      const { id, status } = payload;

      const updatedTodo = await todoService.updateStatus(id, status);
      context.commit('setItems', updatedTodo);
      return updatedTodo;
    },

    async updatePosition(context, payload) {
      const { id, newPosition } = payload;

      // Sync server state
      const allTodos = await todoService.updatePosition(id, newPosition);
      context.commit('setItems', allTodos);
      return allTodos;
    },

    async deleteTodo(context, payload) {
      await todoService.deleteTodo(payload);
      context.commit('removeItem', payload);
    },
  },
};
