<template>
    <Forms @saveTask="saveTask" />
    <div class="lista">
        <Box v-if="lenghtList" class="text-descrition">
        Você não está muito produtivo hoje
        </Box>
        <Lists v-for="(task, index) in tasks" :key="index" :task="task"/>
    </div>
  </template>
  
  <script lang="ts">
  /* eslint-disable */
  import { defineComponent } from "vue";
  import Forms from "../components/Form.vue";
  import Box from "../components/Box.vue";
  import Lists from "../components/Lists.vue";
  import Task from "../interfaces/Task";
  
  export default defineComponent({
    name: "App",
    components: {
      Forms,
      Lists,
      Box,
    },
  
    data () {
      return {
        tasks: [] as Task []
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
      }
    }
  });
  </script>
  