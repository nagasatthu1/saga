import { GET, GET_FAILED, GET_SUCCESS } from "./constants";

const initialState = {
  data: [],
  error: false
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

    default:
      return state;
  }
}

export default userListReducer;
