import { combineReducers } from "redux";
import countReducer from "./components/counterApp/reducer";
import userListReducer from "./components/Users/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
  users: userListReducer
});

export default rootReducer;
