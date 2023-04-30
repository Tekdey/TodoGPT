import axios from "axios";
import * as constants from "../constants/api.constants";

const instance = axios.create({
  baseURL: constants.baseUrl,
});

export const getTodoByStatus = async (status) => {
  return await instance.get(constants.getTodoByStatus(status));
};
export const getAllTodo = async () => {
  return await instance.get(constants.getAllTodo);
};
export const deleteTodoById = async (id) => {
  return await instance.get(constants.deleteTodoById(id));
};
export const changeStatus = async (props) => {
  return await instance.post(constants.changeStatus(props._id), { ...props });
};
