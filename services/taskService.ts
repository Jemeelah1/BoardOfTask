import axios from "axios";

const API = "http://localhost:5000/api/tasks";

export const createTask = async (taskData) => {
  return await axios.post("http://localhost:4000/tasks", taskData);
};

export const getTasks = () => axios.get(API).then((res) => res.data);
// export const createTask = (data) =>
//   axios.post(API, data).then((res) => res.data);
export const updateTask = (id, data) =>
  axios.put(`${API}/${id}`, data).then((res) => res.data);
export const deleteTask = (id) =>
  axios.delete(`${API}/${id}`).then((res) => res.data);
