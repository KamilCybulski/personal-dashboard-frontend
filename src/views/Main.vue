<template>
  <main :class="$style.main">
    <Navigation />
  </main>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
};
</script>

<style lang="scss" module>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
