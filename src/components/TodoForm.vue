<template>
  <form :class="$style.root" @keyup.enter="addTodo" @submit.prevent="noop">
    <h1>Create new item</h1>
    <div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="Name" v-model="name" type="text" />
      </div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="Notes" v-model="notes" type="text" />
      </div>
      <div :class="$style.inputWrapper">
        <ui-datepicker
          v-model='resolveAt'
          floatingLabel
          label="Deadline"
          picker-type="modal"
          id="DATEPICKER"
        />
      </div>
    </div>
    <Button
      fullWidth
      color="primary"
      size="large"
      :loading="loading"
      @click="addTodo"
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
      resolveAt: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    resetForm() {
      this.name = '';
      this.notes = '';
      this.resolveAt = null;
    },

    // KeenUI <ui-datepicker /> components add a number of button elements to the markup without
    // explicitly setting their type. This causes form to be submitted on each date element click.
    // In order to prevent that, we assign noop function as regular submit hadler and handle
    // submit button clicks and enter keypresses manually
    noop() {},

    async addTodo() {
      this.loading = true;

      try {
        const payload = {
          name: this.name,
        };

        if (this.notes) {
          payload.notes = this.notes;
        }

        if (this.resolveAt) {
          payload.resolveAt = this.resolveAt.toISOString();
        }

        await this.$store.dispatch('todos/addTodo', payload);
        this.resetForm();
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
