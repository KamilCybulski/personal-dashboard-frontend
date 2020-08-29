<template>
  <li :class="$style.root">
    <div :class="$style.descriptionWrapper">
      <h3 :class="nameClasses">{{ name }}</h3>
      <div :class="notesClasses">{{ notes }}</div>
    </div>
    <div :class="$style.buttonsWrapper">
      <ui-icon-button
        v-if="localStatus === 'inProgress'"
        icon="done"
        @click="markAsDone"
        type="secondary"
        color="white"
        :loading="loading"
      />
      <ui-icon-button
        v-if="localStatus === 'done'"
        icon="undo"
        @click="markAsUndone"
        type="secondary"
        color="white"
        :loading="loading"
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
    status: {
      validator: oneOf(['done', 'deleted', 'inProgress']),
    },
    createdAt: String,
  },

  data() {
    return {
      localStatus: this.status,
      loading: false,
    };
  },

  computed: {
    nameClasses() {
      return {
        [this.$style.itemName]: true,
        [this.$style.itemDone]: this.localStatus === 'done',
      };
    },
    notesClasses() {
      return {
        [this.$style.itemNotes]: true,
        [this.$style.itemDone]: this.localStatus === 'done',
      };
    },
  },

  methods: {
    async markAsDone() {
      // Optimistic update
      const storedStatus = this.localStatus;
      this.localStatus = 'done';
      this.loading = true;

      try {
        await this.$store.dispatch('todos/updateStatus', {
          id: this.id,
          status: 'done',
        });
      } catch {
        this.localStatus = storedStatus;
        // TODO add some notification about error
      } finally {
        this.loading = false;
      }
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

.itemDone {
  text-decoration: line-through;
}

</style>
