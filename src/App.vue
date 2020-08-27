<template>
  <div id="app">
    <router-view />
  </div>
</template>

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

a {
  color: $primary-text-color;
  text-decoration: none;
}
</style>
