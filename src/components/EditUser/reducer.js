import {
  GET_EDIT,
  GET_EDIT_SUCCESS,
  MERGE_DATA,
  POST,
  POST_FAILED,
  POST_SUCCESS,
  PUT,
  PUT_FAILED,
  PUT_SUCCESS
} from "./constants";

const initialState = {
  localState: {
    loading: false,
    data: [],
    error: false,
    visible: false,
    postSuccess: false
  },
  localData: {}
};

const getEditUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case MERGE_DATA:
      return {
        ...state,
        localState: action.localState,
        localData: action.localData
      };
    case GET_EDIT:
      return {
        ...state
      };
    case GET_EDIT_SUCCESS:
      return {
        ...state,
        localData: action.getUserById
      };
    case POST:
      return {
        ...state
      };
    case POST_SUCCESS:
      return {
        ...state,
        localState: {
          ...state.localState,
          postSuccess: true
        }
      };
    case POST_FAILED:
      return {
        ...state,
        error: true,
        postSuccess: false
      };

    case PUT:
      return {
        ...state
      };
    case PUT_SUCCESS:
      return {
        ...state,
        localState: {
          ...state.localState,
          postSuccess: true
        }
      };
    case PUT_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default getEditUserReducer;
