import http from "./http_common";


const get = id => {
  return http.get(`/user/read/${id}`);
};

const create = data => {
  return http.post("/user/Create", data);
};

const update = (id, data) => {
  return http.path(`/user/update/${id}`, data);
};

const remove = id => {
  return http.delete(`/user/delete/${id}`);
};

export default {
  get,
  create,
  update,
  remove,
  
};
