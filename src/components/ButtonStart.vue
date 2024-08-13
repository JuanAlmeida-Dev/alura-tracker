<template>
    <button class="button" @click="clicked" :disabled="disabled">
      <span class="icon">
        <i :class="icon"></i>
      </span>
      <span>{{text}}</span>
    </button>
  </template>
  
  <script lang="ts">
  /* eslint-disable */
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: 'ButtonStart',

    emits: ['clicked'],

    props: {
      disabled: {
        type: Boolean
      },
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
    },

    methods: {
      clicked () : void {
        this.$emit('clicked')
      }
    }
  });
  </script>