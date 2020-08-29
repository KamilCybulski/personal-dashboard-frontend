<template>
  <form :class="$style.root" @submit.prevent="addTodo">
    <h1>Create new item</h1>
    <div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="name" v-model="name" type="text" />
      </div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="notes" v-model="notes" type="text" />
      </div>
    </div>
    <Button
      fullWidth
      color="primary"
      buttonType="submit"
      size="large"
      :loading="loading"
    >
      Save
    </Button>
  </form>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: { Button },
  data() {
    return {
      name: '',
      notes: '',
      loading: false,
      error: null,
    };
  },
  methods: {
    resetForm() {
      this.name = '';
      this.notes = '';
    },

    async addTodo() {
      this.loading = true;

      try {
        const payload = {
          name: this.name,
          notes: this.notes,
        };

        await this.$store.dispatch('todos/addTodo', payload);
        this.name = '';
        this.notes = '';
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" module>
.root {
  width: 100%;
  height: 100%;
  padding: 10px 30px 30px;
  overflow-y: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.inputWrapper {
  margin-bottom: 35px;
}
</style>
