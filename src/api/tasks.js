import axios from "axios";

const API_URI = 'http://localhost:5000/api/tasks';

export const createTask = (task) => axios.post(API_URI, task);
export const getTasks = () => axios.get(API_URI);
export const updateTask = (id, updatedTask) => axios.put(`${API_URI}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${API_URI}/${id}`);