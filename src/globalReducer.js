import { combineReducers } from "redux";
import countReducer from "./components/counterApp/reducer";

const rootReducer = combineReducers({
  counter: countReducer
});

export default rootReducer;
