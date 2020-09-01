<template>
  <div :class="$style.root">
      <Draggable
        v-model="todos"
        @change="handleChange"
        @start="drag = true"
        @end="drag = false"
        :ghostClass="$style.ghost"
        :animation="200"
        tag="ul"
        :class="$style.list"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
        </transition-group>
      </Draggable>
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
      drag: false,
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
  min-height: 20px;
}

:global(.flip-list-move) {
  transition: transform 0.5s;
}

:global(.no-move) {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

</style>
