<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :time="time" />
    <button class="button" @click="play" :disabled="status">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stop" :disabled="!status">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",

  components: {
    Cronometro
  },

  data() {
    return {
      time: 0,
      cronometro: 0,
      status: false,
    };
  },

  methods: {
    play() {
      this.status = true;
      this.cronometro = setInterval(() => {
        this.time++;
      }, 1000);
    },

    stop() {
      this.status = false;
      clearInterval(this.cronometro);
    },
  },
});
</script>

<style scoped></style>
