<template>
  <ui-button v-bind="{ ...$attrs, ...filteredProps }" v-on="$listeners">
    <slot />
  </ui-button>
</template>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        [this.$style.fullWidth]: this.fullWidth,
      },
    };
  },
  computed: {
    filteredProps() {
      const { fullWidth, ...rest } = this.$props;
      return rest;
    },
  },
};
</script>

<style lang="scss" module>
.fullWidth {
  width: 100%;
}
</style>
