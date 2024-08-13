<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :time="time" />
    <ButtonStart @click="play" icon="fas fa-play" text="play" :disabled="status" />
    <ButtonStart @click="stop" icon="fas fa-stop" text="stop" :disabled="!status" />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import StopWatch from "./StopWatch.vue";
import ButtonStart from "./ButtonStart.vue";

export default defineComponent({
  name: 'Timer',

  emits: ["timerFinished"],

  components: {
    StopWatch,
    ButtonStart,
  },

  data() {
    return {
      time: 0,
      stopwatch: 0,
      status: false,
    };
  },

  methods: {
    play() {
      this.status = true;
      this.stopwatch = setInterval(() => {
        this.time++;
      }, 1000);
    },

    stop() {
      this.status = false;
      clearInterval(this.stopwatch);
      this.$emit("timerFinished", this.time);
      this.time = 0;
    },
  },
});
</script>

