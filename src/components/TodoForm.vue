<template>
  <form :class="$style.root" @submit.prevent="createTodo">
    <h1>Create new item</h1>
    <div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="name" v-model="name" type="text" />
      </div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="notes" v-model="notes" multiLine />
      </div>
    </div>
    <ui-button
      :class="$style.button"
      color="primary"
      buttonType="submit"
      size="large"
    >
      Save
    </ui-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      notes: '',
    };
  },
  methods: {
    createTodo() {
      console.log(this.name, ' | ', this.notes);
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

.button {
  width: 100%;
}
</style>
