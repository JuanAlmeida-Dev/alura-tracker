<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario">
        <input class="input" type="text" placeholder="Tarefa" v-model="descricao"/>
      </div>
      <div class="column">
        <Temporizador @temporizadorFinished="finishedTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
  name: 'Formulario',

  emits: ['saveTarefa'],

  components: {
    Temporizador
  },

  data() {
    return {
      descricao: ''
    };
  },

  methods: {
    finishedTask(time: number) : void {
      this.$emit('saveTarefa' ,{
        time: time,
        descricao: this.descricao
      });
      this.descricao = '';
    }
  }
});
</script>

<style scoped>

</style>
