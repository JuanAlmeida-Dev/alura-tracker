<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo">
        </div>
        <button class="button" @click="alterTheme">
            {{textButton}}
        </button>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/task" class="links">
                        <i class="fas fa-tasks"></i>
                        Tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/project"  class="links">
                        <i class="fas fa-project-diagram"></i>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',

  emits: ['ThemeAltered'],

  data () {
    return {
        themeLight: false
    }
  },

  computed: {
    textButton () {
        if (this.themeLight) {
            return 'Escuro'
        }
        return 'Claro'
    }
  },

  methods: {
    alterTheme () {
        this.themeLight = !this.themeLight
        this.$emit('ThemeAltered', this.themeLight)
    }
  }
});
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        background-color: #0d3b66;
        color: #fff;
        width: 100%;
        height: 100vh;
    }

    .logo img {
        width: 100px;
    }
    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #fff;
    }
    .link:hover {
        color: #FAF0CA;
    }
    .link.router-link-active {
        color: #FAF0CA;
    }
</style>