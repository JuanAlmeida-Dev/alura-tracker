<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="Logo">
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral'
});
</script>

<style scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: #0d3b66;
        color: #fff;
        width: 100%;
        height: 100vh;
    }

    .logo img {
        width: 100px;
    }
</style>