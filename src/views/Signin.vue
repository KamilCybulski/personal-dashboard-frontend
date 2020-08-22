<template>
  <div :class="$style.root">
    <AuthForm type='signin' :onSubmit="handleSubmit" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  components: { AuthForm },
  methods: {
    handleSubmit(name, password) {
      console.log({ name, password });
    },
  },
};
</script>

<style lang="scss" module>
.root {
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
