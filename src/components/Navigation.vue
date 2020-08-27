<template>
  <nav :class="$style.root">
    <h1 :class="$style.header">Dashboard</h1>
    <ul :class="$style.list">
      <NavigationItem v-for="route in routes" :key="route.label" v-bind="route" />
    </ul>
  </nav>
</template>

<script>
import NavigationItem from '@/components/NavigationItem.vue';
import { ROUTE_NAMES } from '@/router';

const routes = [
  { label: 'To do', icon: 'done', to: { name: ROUTE_NAMES.main } },
  { label: 'Notes', icon: 'subject', to: { name: ROUTE_NAMES.main } },
  { label: 'Chat', icon: 'chat_bubble', to: { name: ROUTE_NAMES.main } },
];

export default {
  components: { NavigationItem },
  data() {
    return { routes };
  },
};
</script>

<style lang="scss" module>
.root {
  width: 340px;
  height: 100%;
  background-color: $background-light;
  padding: 24px 0 24px;
}

.header {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  margin-left: 24px;
}

.list {
  list-style-type: none;
  padding: 0;
}
</style>
