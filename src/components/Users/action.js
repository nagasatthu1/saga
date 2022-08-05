import { DELETE, GET } from "./constants";

export function getUsers() {
  return {
    type: GET
  };
}

export function deleteUser(id) {
  return {
    type: DELETE,
    id
  };
}
