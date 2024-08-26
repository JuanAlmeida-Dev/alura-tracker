<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulario">
        <input class="input" type="text" placeholder="Tarefa" v-model="desc"/>
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Selecione o projeto</option>
            <option :value="project.id" v-for="project in projects" :key="project.id">{{ project.name }}</option>

          </select>
        </div>
      </div>
      <div class="column">
        <Timer @timerFinished="finishedTask"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent } from 'vue';
import Timer from './Timer.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'Forms',

  emits: ['saveTask'],

  components: {
    Timer
  },

  data() {
    return {
      desc: '',
      idProject: ''
    };
  },

  methods: {
    finishedTask(time: number) : void {
      this.$emit('saveTask' ,{
        time: time,
        desc: this.desc,
        project: this.projects.find(project => project.id == this.idProject)
      })
      this.desc = ''
    }
  },

  setup() {
    const store = useStore(key)
    return{
      projects: computed(() => store.state.projects)
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
