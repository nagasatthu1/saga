import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_EDIT,
  GET_EDIT_SUCCESS,
  POST,
  POST_SUCCESS,
  PUT,
  PUT_SUCCESS
} from "./constants";

var data = {};
var id = 0;

async function callUserById() {
  try {
    const response = await fetch(
      `https://62dfb851976ae7460bf21076.mockapi.io/users/${data}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.log(error));
    return response;
  } catch (error) {
    throw error;
  }
}

function* getUser(action) {
  data = action.data;
  const getUserById = yield call(callUserById);
  console.log("Saga", getUserById);
  yield put({
    type: GET_EDIT_SUCCESS,
    getUserById
  });
}

const postAPIUser = () => {
  fetch(`https://62dfb851976ae7460bf21076.mockapi.io/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      address: data.address,
      avatar: data.avatar,
      birthday: data.birthday
    })
  }).then((data) => data);
};

function* postUser(action) {
  data = action.data;
  const postUserAPI = yield call(postAPIUser);
  yield put({
    type: POST_SUCCESS,
    payload: postUserAPI
  });
}

const editAPIUser = () => {
  fetch(`https://62dfb851976ae7460bf21076.mockapi.io/users/${data.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      address: data.address,
      avatar: data.avatar,
      birthday: data.birthday
    })
  }).then((data) => data);
};

function* putUser(action) {
  data = action.data;
  const putUserAPI = yield call(editAPIUser);
  yield put({
    type: PUT_SUCCESS,
    payload: putUserAPI
  });
}

function* editAPI() {
  yield takeEvery(GET_EDIT, getUser);
  yield takeEvery(POST, postUser);
  yield takeEvery(PUT, putUser);
}

export default editAPI;
