<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario">
        <input class="input" type="text" placeholder="Tarefa" />
      </div>

      <div class="column">
        <Temporizador />
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

  components: {
    Temporizador
  },
});
</script>

<style scoped>

</style>
