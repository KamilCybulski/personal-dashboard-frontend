<template>
  <div :class="$style.root">
    <AuthForm type='signin' />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  components: { AuthForm },
};
</script>

<style lang="scss" module>
.root {
  width: 100vw;
  height: 100vh;
}
</style>
