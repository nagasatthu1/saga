import { put, takeEvery, call } from "redux-saga/effects";
import { DELETE, GET, GET_SUCCESS } from "./constants";

const data = {};

const callUsersAPI = () => {
  const data = fetch("https://62dfb851976ae7460bf21076.mockapi.io/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
  return data;
};

function* getUsers(action) {
  // data = action.payload;
  const getUsersAPI = yield call(callUsersAPI);
  yield put({
    type: GET_SUCCESS,
    payload: getUsersAPI
  });
}

async function handleDelete() {
  try {
    const response = await fetch(
      `https://62dfb851976ae7460bf21076.mockapi.io/users/${data.id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then((response) => response);
    return response;
  } catch (error) {
    throw error;
  }
}

function* deleteUserById(action) {
  const data = action;
  try {
    yield call(handleDelete);
  } catch (e) {
    console.log(e);
  }
}

function* usersSaga() {
  yield takeEvery(GET, getUsers);
  yield takeEvery(DELETE, deleteUserById);
}

export default usersSaga;
