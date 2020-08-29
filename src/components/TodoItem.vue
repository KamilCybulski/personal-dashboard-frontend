<template>
  <li :class="$style.root">
    <div :class="$style.descriptionWrapper">
      <h3 :class="$style.itemName">{{ name }}</h3>
      <div :class="$style.itemNotes">{{ notes }}</div>
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
        type="secondary"
        color="white"
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
  padding: 16px 24px;
}

.descriptionWrapper {
  display: flex;
  flex-flow: column nowrap;
}

.buttonsWrapper {
  display: flex;
  margin-left: 16px;
}

.itemName {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px;
}

.itemNotes {
  font-size: 12px;
}
</style>
