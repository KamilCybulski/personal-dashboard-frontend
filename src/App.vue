<template>
  <div id="app">
    <router-view v-if="initialized" />
    <div v-else>LOADING</div>
  </div>
</template>

<script>
import { ACCESS_TOKEN_KEY } from '@/services';

export default {
  data() {
    return {
      initialized: false,
    };
  },

  methods: {
    setInitialized() {
      this.initialized = true;
    },
  },

  async created() {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (token) {
      await this.$store.dispatch('getUser');
    }

    this.initialized = true;
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
  font-family: $font-stack;
  color: $primary-text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $background-dark;
}
</style>
