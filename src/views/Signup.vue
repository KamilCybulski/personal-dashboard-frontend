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
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
