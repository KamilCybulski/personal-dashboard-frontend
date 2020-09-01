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
        @click="updateStatus('done')"
        type="secondary"
        color="white"
        :loading="statusLoading"
      />
      <ui-icon-button
        v-if="localStatus === 'done'"
        icon="undo"
        @click="updateStatus('inProgress')"
        type="secondary"
        color="white"
        :loading="statusLoading"
      />
      <ui-icon-button
        icon="delete"
        @click="deleteTodo"
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
      validator: oneOf(['done', 'inProgress']),
    },
    createdAt: String,
  },

  data() {
    return {
      localStatus: this.status,
      statusLoading: false,
      deleteLoading: false,
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
    async updateStatus(newStatus) {
      // Optimistic update
      const storedStatus = this.localStatus;
      this.localStatus = newStatus;
      this.statusLoading = true;

      try {
        await this.$store.dispatch('todos/updateStatus', {
          id: this.id,
          status: newStatus,
        });
      } catch {
        this.localStatus = storedStatus;
        // TODO add some notification about error when status update fails
      } finally {
        this.statusLoading = false;
      }
    },

    async deleteTodo() {
      this.deleteLoading = true;

      try {
        await this.$store.dispatch('todos/deleteTodo', this.id);
      } catch {
        // TODO add notification
      } finally {
        this.deleteLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" module>
.root {
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  transition: all 0.5s linear;
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
