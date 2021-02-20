import http from "./http_common";

//funciones que se llaman desde la vista
const get = id => {
  return http.get(`/user/read/${id}`);
};

const create = data => {
  return http.post("/user/Create", data); //recibe el state de la vista
};

const update = (id, data) => {
  return http.path(`/user/update/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/delete/${id}`);
};

const login = data => {
  return http.post(`/user/login`, data);
};

export default {
  get,
  create,
  update,
  remove,
  login
};