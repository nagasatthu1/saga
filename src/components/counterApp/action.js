import { ADD, RESET, SUBTRACT } from "./constants";

export function addCount() {
  return {
    type: ADD
  };
}

export function subtractCount() {
  return {
    type: SUBTRACT
  };
}

export function resetCount() {
  return {
    type: RESET
  };
}
