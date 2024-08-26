<template>
  <Box>
    <div class="columns" v-if="task">
      <div class="column is-7 text-descrition">
        {{task.desc || 'Sem descrição'}}
      </div>
      <div class="column is-3">
        {{ task.project?.name || 'Sem projeto' }}
      </div>
      <div class="column time">
        <StopWatch :time="task.time" />
      </div>
    </div>
    <div v-else>
      Task data is not available.
    </div>
  </Box>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, PropType  } from "vue";
import Task from "../interfaces/Task";
import Box from "./Box.vue";
import StopWatch from "./StopWatch.vue";

export default defineComponent({
  name: 'Lists',

  components: {
    StopWatch,
    Box,
  },

  props:{
    task: {
      type: Object as PropType<Task>,
        required: true
    }
  }
});
</script>

<style>
.text-descrition{
  color: #fff;
}
</style>

