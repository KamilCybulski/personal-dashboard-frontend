<template>
  <div :class="$style.root">
    <h1>{{ title }}</h1>
    <form :class="$style.form" @submit.prevent="handleSubmit">
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="e-mail" v-model="email" type="text" />
      </div>
      <div :class="$style.inputWrapper">
        <ui-textbox floatingLabel label="password" v-model="password" type="password" />
      </div>
      <div :class="$style.buttonWrapper">
        <ui-button color="primary" buttonType="submit" size="large">{{ title }}</ui-button>
      </div>
    </form>
  </div>
</template>

<script>
import { oneOf } from '@/helpers/props-validators';

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: oneOf(['signup', 'signin']),
    },
  },
  data() {
    return {
      title: this.type === 'signup' ? 'Sign up' : 'Sign in',
      email: '',
      password: '',
    };
  },

  methods: {
    handleSubmit() {
      console.log({ email: this.email, password: this.password });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  width: 100%;
  max-width: 400px;
  border-radius: 2px;
  background-color: $background-light;
  padding: 10px 30px 50px;
}

.form {
  margin-top: 30px;
}

.inputWrapper {
  margin: 30px 0;
}

.buttonWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;

  button {
    width: 100%;
  }
}
</style>
