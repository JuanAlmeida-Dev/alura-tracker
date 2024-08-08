<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :time="time" />
    <Botao @clicado="play" icone="fas fa-play" texto="play" :desabilitado="status" />
    <Botao @clicado="stop" icone="fas fa-stop" texto="stop" :desabilitado="!status" />
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue";

export default defineComponent({
  name: "Temporizador",

  emits: ["temporizadorFinished"],

  components: {
    Cronometro,
    Botao,
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
      this.$emit("temporizadorFinished", this.time);
      this.time = 0;
    },
  },
});
</script>

<style scoped></style>
