const dev = "http://192.168.56.1:8956";
const prod = "http://192.168.56.1:8956";

export const baseUrl = dev;

export const getTodoByStatus = (status) => `/get/all/todo/${status}`;
export const deleteTodoById = (id) => `/delete/todo/${id}`;
export const getAllTodo = `/get/all/todo`;
export const changeStatus = (id) => `/update/todo/${id}`;
