<template>
  <div :class="$style.root">
    <div :class="$style.form">
      <TodoForm />
    </div>
    <div :class="$style.list" />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';

export default {
  components: { TodoForm },
};
</script>

<style lang="scss" module>
.root {
  flex: 1;
  padding: 30px;
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-rows: 400px 1fr;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-areas:
    "form list"
    ". list"
}

.form {
  grid-area: form;
  background-color: $background-light;
}

.list {
  grid-area: list;
  background-color: $background-light;
}
</style>
