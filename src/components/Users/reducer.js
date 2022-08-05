import {
  DELETE,
  DELETE_FAILED,
  DELETE_SUCCESS,
  GET,
  GET_FAILED,
  GET_SUCCESS
} from "./constants";

const initialState = {
  data: [],
  error: false,
  visible: false
};

function userListReducer(state = initialState, action) {
  // console.log("Reducer", action);
  switch (action.type) {
    case GET:
      return {
        ...state
      };
    case GET_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case GET_FAILED:
      return {
        ...state,
        error: true
      };

    case DELETE:
      return {
        ...state,
        visible: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        visible: false
      };
    case DELETE_FAILED:
      return {
        ...state,
        error: true,
        visible: false
      };
    default:
      return state;
  }
}

export default userListReducer;
