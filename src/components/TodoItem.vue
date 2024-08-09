<template>
    <div>
      <input v-model="localTodo.title" @input="updateTodo" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        localTodo: { ...this.todo } // Create a local copy of the todo
      }
    },
    methods: {
      updateTodo() {
        this.$emit('update:todo', this.localTodo) // Emit the updated todo to the parent
      }
    }
  }
  </script>
  