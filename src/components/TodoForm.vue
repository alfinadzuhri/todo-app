<template>
    <form class="todo-form" @submit.prevent="handleSubmit">
      <input v-model="localTodo.title" placeholder="Enter todo title" />
      <button type="submit">{{ buttonText }}</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'TodoForm',
    props: ['todo', 'buttonText'],
    data() {
      return {
        localTodo: { ...this.todo } 
      };
    },
    methods: {
      handleSubmit() {
        if (!this.localTodo.title || !this.localTodo.title.trim()) {
          alert('Todo title cannot be empty!');
          return;
        }
        this.$emit('submit', this.localTodo);
        this.localTodo = { title: '' }; 
      }
    },
    watch: {
      todo: {
        immediate: true,
        handler(newTodo) {
          this.localTodo = { ...newTodo };
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-form {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .todo-form input {
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 70%;
    margin-right: 10px;
  }
  
  .todo-form button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  
  .todo-form button:hover {
    background-color: #45a049;
  }
  </style>
  