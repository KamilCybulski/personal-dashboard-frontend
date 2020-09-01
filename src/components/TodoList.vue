<template>
  <div :class="$style.root">
    <ul :class="$style.list">
      <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import TodoItem from '@/components/TodoItem.vue';

export default {
  components: { TodoItem },
  data() {
    return {
      loading: false,
      error: null,
    };
  },

  computed: {
    ...mapState({
      todos: (state) => Object.values(state.todos.items).sort((a, b) => a.position - b.position),
    }),
  },

  async created() {
    this.loading = true;

    try {
      await this.$store.dispatch('todos/getAllTodos');
    } catch (err) {
      this.error = err;
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
}

.list {
  list-style: none;
  padding: 0;
}

</style>
