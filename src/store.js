import { createStore } from 'vuex';
import api from './services/api';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id);
      state.todos[index] = todo;
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
  },
  actions: {
    fetchTodos({ commit }, { limit, page }) {
      api.getTodos(limit, page).then(response => {
        commit('setTodos', response.data);
      });
    },
    createTodo({ commit }, todo) {
      api.addTodo(todo).then(response => {
        commit('addTodo', response.data);
      });
    },
    editTodo({ commit }, todo) {
      api.updateTodo(todo.id, todo).then(() => {
        commit('updateTodo', todo);
      });
    },
    removeTodo({ commit }, id) {
      api.deleteTodo(id).then(() => {
        commit('deleteTodo', id);
      });
    },
  },
});
