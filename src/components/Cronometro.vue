<template>
  <section>
    <strong>{{ timeFormated }}</strong>
  </section>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'Cronometro',

    props: {
        time: {
            type: Number,
            default: 0,
        },
    },

    computed:{
    timeFormated() : string {
      return new Date(this.time * 1000).toISOString().substr(11, 8);
        }
    },

});
</script>

<style scoped></style>
