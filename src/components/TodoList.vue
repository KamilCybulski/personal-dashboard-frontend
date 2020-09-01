<template>
  <div :class="$style.root">
    <ul :class="$style.list">
      <Draggable
        v-model="todos"
        @change="handleChange"
      >
        <transition-group type="transition" name="flip-list">
          <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
        </transition-group>
      </Draggable>
    </ul>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';

import TodoItem from '@/components/TodoItem.vue';

export default {
  components: { TodoItem, Draggable },
  data() {
    return {
      loading: false,
      error: null,
    };
  },

  methods: {
    handleChange(evt) {
      const { element, newIndex } = evt.moved;
      const payload = {
        id: element.id,
        newPosition: newIndex,
      };

      this.$store.dispatch('todos/updatePosition', payload);
    },
  },

  computed: {
    todos: {
      get() {
        return Object
          .values(this.$store.state.todos.items)
          .sort((a, b) => a.position - b.position);
      },
      set() {
        // noop
      },
    },
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

.flip-list-move {
  transition: transform 0.5s;
}

</style>
