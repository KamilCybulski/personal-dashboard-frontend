<template>
  <div :class="$style.root">
    <AuthForm type="signup" :onSubmit="handleSubmit" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';
import { userService } from '@/services';
import { ROUTE_NAMES } from '@/router';

export default {
  components: { AuthForm },
  methods: {
    async handleSubmit(name, password) {
      await userService.signUp(name, password);
      this.$router.push({ name: ROUTE_NAMES.signin });
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
