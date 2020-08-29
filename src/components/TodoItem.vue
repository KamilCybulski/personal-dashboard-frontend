<template>
  <li :class="$style.root">
    <div :class="$style.descriptionWrapper">
      <div>{{ name }}</div>
      <div>{{ notes }}</div>
    </div>
    <div :class="$style.buttonsWrapper">
      <ui-icon-button
        v-if="status === 'inProgress'"
        icon="done"
        @click="markAsDone"
        type="secondary"
        color="white"
      />
      <ui-icon-button
        v-if="status === 'done'"
        icon="undo"
        @click="markAsUndone"
      />
      <ui-icon-button
        icon="delete"
        @click="markAsDeleted"
      />
    </div>
  </li>
</template>

<script>
import { oneOf } from '@/helpers/props-validators';

export default {
  props: {
    id: Number,
    name: String,
    notes: String,
    status: oneOf(['done', 'deleted', 'inProgress']),
    createdAt: String,
  },
  methods: {
    markAsDone() {
      console.log('Marked as done');
    },
    markAsUndone() {
      console.log('Marked as undone');
    },
    markAsDeleted() {
      console.log('Delete');
    },
  },
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}

.descriptionWrapper {
  display: flex;
  flex-flow: column nowrap;
}

.buttonsWrapper {
  display: flex;
}
</style>
