<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @saveTarefa="saveTarefa"/>
      <div class="lista">
        <Lista v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Lista from "./components/Lista.vue";
import Tarefa from "./interfaces/Tarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Lista,
  },

  data () {
    return {
      tarefas: [] as Tarefa []
    }
  },

  methods: {
    saveTarefa (tarefa: Tarefa) {
      this.tarefas.push(tarefa)
    }
  }
});
</script>

<style>
.lista{
  padding: 1.5rem;
}
</style>
