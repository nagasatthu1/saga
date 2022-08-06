import { GET_EDIT_REQUEST, MERGE_DATA, POST, PUT } from "./constants";

export function postUser(data) {
  return {
    type: POST,
    data
  };
}

export function mergeData(localState, localData) {
  return {
    type: MERGE_DATA,
    localState,
    localData
  };
}

export function getEditUser(data) {
  return {
    type: GET_EDIT_REQUEST,
    data
  };
}

export function editUser(data) {
  return {
    type: PUT,
    data
  };
}
