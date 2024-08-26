<template>
  <main class="columns is-gapless is-multiline" :class="{ 'theme-light' :themeLight}">
    <div class="column is-one-quarter">
      <SideBar @ThemeAltered="themeToggle" />
    </div>
    <div class="column is-three-quarter content">
      <Notification />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import Notification from "./components/Notification.vue";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    Notification,
  },

  data () {
    return {
      themeLight: false
    }
  },

  methods: {
    themeToggle (themeLight: boolean) {
      this.themeLight = themeLight
    }
  }
});
</script>

<style>
.lista{
  padding: 1.5rem;
}

main.theme-light {
  --bg--primary: #fff;
  --text-primary: #000;
}

main {
  --bg--primary: #14161A;
  --text-primary: #fff;
}

.content {
  background: var(--bg--primary);
}

.text-descrition {
  color: #fff;
}
</style>
