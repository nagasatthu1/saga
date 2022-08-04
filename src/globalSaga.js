import { all } from "redux-saga/effects";
import countSaga from "./components/counterApp/saga";

function* rootSaga() {
  yield all([countSaga()]);
}

export default rootSaga;
