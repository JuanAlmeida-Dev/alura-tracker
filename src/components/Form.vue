<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario">
        <input class="input" type="text" placeholder="Tarefa" v-model="desc"/>
      </div>
      <div class="column">
        <Timer @timerFinished="finishedTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';
import Timer from './Timer.vue';

export default defineComponent({
  name: 'Forms',

  emits: ['saveTask'],

  components: {
    Timer
  },

  data() {
    return {
      desc: ''
    };
  },

  methods: {
    finishedTask(time: number) : void {
      this.$emit('saveTask' ,{
        time: time,
        desc: this.desc
      });
      this.desc = '';
    }
  }
});
</script>

<style>
.form {
  color: var(--text-primary);
  background: var(--bg--primary);
}

</style>
