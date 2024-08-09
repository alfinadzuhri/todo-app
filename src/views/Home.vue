<template>
    <div>
      <TodoList />
    </div>
  </template>
  
  <script>
  import TodoList from '@/components/TodoList.vue';
  
  export default {
    name: 'HomePage', 
    components: {
      TodoList
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  