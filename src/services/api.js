import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTodos(limit, page) {
    return apiClient.get(`/todos?_limit=${limit}&_page=${page}`);
  },
  addTodo(todo) {
    return apiClient.post('/todos', todo);
  },
  updateTodo(id, todo) {
    return apiClient.put(`/todos/${id}`, todo);
  },
  deleteTodo(id) {
    return apiClient.delete(`/todos/${id}`);
  },
};
