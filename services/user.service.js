import { apiUrl } from "config";
import { fetchWrapper } from "helpers";

export const userService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

const baseUrl = `${apiUrl}/users`;

function getAll() {
  return fetchWrapper.get(baseUrl);
}

function getById(id) {
  return fetchWrapper.get(`https://csb-2h5ie.vercel.app/api/users/${id}`);
}

function create(params) {
  return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
}
