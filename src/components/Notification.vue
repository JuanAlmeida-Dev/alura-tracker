<template>
  <div class="notifications">
    <article class="message" :class="context[notification.type]" v-for="notification in notifications" :key="notification.id">
      <div class="message-header">
        <p>{{notification.title}}</p>
      </div>
      <div class="message-body">
        {{notification.message}}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { NotificationType } from "@/interfaces/Notification";

export default defineComponent({
  name: "Notification",

  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: "is-success",
        [NotificationType.ERROR]: "is-danger",
        [NotificationType.WARNING]: "is-warning",
      }
    };
  },

  setup() {
    const store = useStore();
    return {
      store,
      notifications: computed(() => store.state.notifications),
    };
  }
});
</script>

<style scoped>

.notifications {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 1rem;
  z-index: 1;
}

</style>
