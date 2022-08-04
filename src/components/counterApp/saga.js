import { put, takeEvery } from "redux-saga/effects";
import { ADD, RESET, SUBTRACT } from "./constants";

function* addSaga() {
  yield put({
    type: ADD
  });
}
function* subtractSaga() {
  yield put({
    type: SUBTRACT
  });
}
function* resetSaga() {
  yield put({
    type: RESET
  });
}

function* countSaga() {
  yield takeEvery("ADD_SUCCESS", addSaga);
  yield takeEvery("SUBTRACT_SUCCESS", subtractSaga);
  yield takeEvery("RESET_SUCCESS", resetSaga);
}

export default countSaga;
