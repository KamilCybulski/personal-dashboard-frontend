<template>
  <div :class="$style.root">
    <AuthForm type='signin' :onSubmit="handleSubmit" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import { ROUTE_NAMES } from '@/router';

export default {
  components: { AuthForm },
  methods: {
    async handleSubmit(name, password) {
      await this.$store.dispatch('signIn', { name, password });
      this.$router.push({ name: ROUTE_NAMES.todos });
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
