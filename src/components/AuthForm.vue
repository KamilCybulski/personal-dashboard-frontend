<template>
  <div>
    Hello!
    <form @submit.prevent="handleSubmit">
      <ui-textbox label="e-mail" placeholder="Enter your e-mail" v-model="email" type="text" />
      <ui-textbox
        label="password"
        placeholder="Enter your password"
        v-model="password"
        type="password"
      />
      <ui-button color="primary">Click</ui-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    handleSubmit(values) {
      console.log(values);
    },
  },
};
</script>
