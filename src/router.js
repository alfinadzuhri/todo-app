import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const routes = [
  { path: '/', component: TodoList },
  { path: '/edit/:id', component: TodoForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
