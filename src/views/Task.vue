<template>
  <Forms @saveTask="saveTask" />
  <div class="lista">
    <Box v-if="lenghtList" class="text-descrition">
      Você não está muito produtivo hoje
    </Box>
    <Lists
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      @task-click="selectTask"
    />
    <div class="modal" :class="{ 'is-active': taskSelected }" v-if="taskSelected">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Editar Tarefa</p>
          <button
            @click="closeModal"
            class="delete"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label for="descTask" class="label">Descrição</label>
            <input
              type="text"
              class="input"
              v-model="taskSelected.desc"
              id="descTask"
            />
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button class="button is-success">Salvar alterações</button>
            <button @click="closeModal" class="button">Cancelar</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import Forms from "../components/Form.vue";
import Box from "../components/Box.vue";
import Lists from "../components/Lists.vue";
import { GET_PROJECTS, GET_TASKS, REGISTER_TASK } from "@/store/actions";
import Task from "@/interfaces/Task";

export default defineComponent({
  name: "Task",
  components: {
    Forms,
    Lists,
    Box,
  },

  data() {
    return {
      taskSelected: null as Task | null,
    };
  },
  methods: {
    saveTask(task: Task): void {
      this.store.dispatch(REGISTER_TASK, task);
    },
    selectTask(task: Task) {
      this.taskSelected = task;
    },
    closeModal() {
      this.taskSelected = null;
    },
  },

  computed: {
    lenghtList(): boolean {
      return this.tasks.length === 0;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_TASKS);
    store.dispatch(GET_PROJECTS);
    return {
      tasks: computed(() => store.state.tasks),
      store,
    };
  },
});
</script>
