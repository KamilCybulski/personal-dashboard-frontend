<template>
  <li :class="$style.root">
    <router-link :class="linkClasses" :to="to">
      <ui-icon :icon="icon" />
      <div :class="$style.text">{{ label }}</div>
    </router-link>
  </li>
</template>

<script>
import { ROUTE_NAMES } from '@/router';

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: [String, Object],
      required: false,
      default: () => ({ name: ROUTE_NAMES.main }),
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      linkClasses: {
        [this.$style.link]: true,
        [this.$style.linkActive]: this.active,
      },
    };
  },
};
</script>

<style lang="scss" module>
.root {
  height: 48px;
  width: 100%;
}

.link {
  color: white;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  transition: all 0.4s ease-out;

  &:hover {
    color: $primary;
  }
}

.linkActive {
  color: $primary;
}

.text {
  margin-left: 8px;
}

</style>
