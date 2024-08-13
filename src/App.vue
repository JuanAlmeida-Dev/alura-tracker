<template>
  <main class="columns is-gapless is-multiline" :class="{ 'theme-light' :themeLight}">
    <div class="column is-one-quarter">
      <SideBar @ThemeAltered="themeToggle" />
    </div>
    <div class="column is-three-quarter content">
      <Forms @saveTask="saveTask" />
      <div class="lista">
        <Lists v-for="(task, index) in tasks" :key="index" :task="task"/>
        <Box v-if="lenghtList" class="text-descrition">
          Você não está muito produtivo hoje
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import Forms from "./components/Form.vue";
import Box from "./components/Box.vue";
import Lists from "./components/Lists.vue";
import Task from "./interfaces/Task";

export default defineComponent({
  name: "App",
  components: {
    SideBar,
    Forms,
    Lists,
    Box,
  },

  data () {
    return {
      tasks: [] as Task [],
      themeLight: false
    }
  },

  computed: {
    lenghtList ():  boolean {
      return this.tasks.length === 0
    }
  },

  methods: {
    saveTask (task: Task) {
      this.tasks.push(task)
    },
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
