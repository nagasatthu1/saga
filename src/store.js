import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose
} from "redux";
import rootReducer from "./globalReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./globalSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
