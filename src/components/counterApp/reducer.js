import { ADD, RESET, SUBTRACT } from "./constants";

const initialState = {
  count: 0
};

function countReducer(state = initialState, action) {
  console.log("Reducer action: ", action);

  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };
    case SUBTRACT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };

    default:
      return state;
  }
}

export default countReducer;
