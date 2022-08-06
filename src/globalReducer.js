import { combineReducers } from "redux";
import countReducer from "./components/counterApp/reducer";
import getEditUserReducer from "./components/EditUser/reducer";
import userListReducer from "./components/Users/reducer";

const rootReducer = combineReducers({
  counter: countReducer,
  users: userListReducer,
  editUser: getEditUserReducer
});

export default rootReducer;
