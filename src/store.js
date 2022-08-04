import { legacy_createStore as createStore } from "redux";
import rootReducer from "./globalReducer";

const store = createStore(rootReducer);

export default store;
