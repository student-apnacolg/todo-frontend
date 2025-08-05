import axios from "axios";

const API = axios.create({
  baseURL: 'https://todo-backend-evep.onrender.com/api/tasks',
  withCredentials: true
})

export const createTask = (task) => API.post('/', task);
export const getTasks = () => API.get('/');
export const updateTask = (id, updatedTask) => API.put(`/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/${id}`);