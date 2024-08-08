<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        {{tarefa.descricao}}
      </div>
      <div class="column">
        <Cronometro :time="tarefa.time" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    /* eslint-disable */
import { defineComponent, PropType  } from "vue";
import Cronometro from "./Cronometro.vue";
import Tarefa from "../interfaces/Tarefa";

export default defineComponent({
  name: "Lista",

  components: {
    Cronometro,
  },

  props:{
    tarefa: {
      type: Object as PropType<Tarefa>,
        required: true
    }
  }
});
</script>

<style scoped>
.box{
  background-color: #0d3b66;
}
</style>
