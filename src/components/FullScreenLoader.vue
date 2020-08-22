<template>
  <div :class="$style.root">
    <ui-progress-circular color="primary" size="54" />
  </div>
</template>

<style lang="scss" module>
.root {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
