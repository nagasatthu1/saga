import { all } from "redux-saga/effects";
import countSaga from "./components/counterApp/saga";
import usersSaga from "./components/Users/saga";

function* rootSaga() {
  yield all([countSaga(), usersSaga()]);
}

export default rootSaga;
