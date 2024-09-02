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
import { computed, defineComponent } from "vue";
import { useStore } from '@/store';
import Forms from "../components/Form.vue";
import Box from "../components/Box.vue";
import Lists from "../components/Lists.vue";
import { GET_TASKS } from "@/store/actions";
  
export default defineComponent({
  name: "Task",
  components: {
    Forms,
    Lists,
    Box,
  },
  methods: {
    // saveTask (task: Task) : void {
    //   this.tasks.push(task)
    // }
  },

  computed: {
    lenghtList ():  boolean {
      return this.tasks.length === 0
    }
  },
  setup () {
      const store = useStore()
      store.dispatch(GET_TASKS);
      return {
        tasks: computed(() => store.state.tasks),
        store
      }
  }
});
</script>
  