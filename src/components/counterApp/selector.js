import { createSelector } from "reselect";
import initialState from "./reducer";

const selectHome = (state) => state.counter || initialState;
const makeSelectCount = () =>
  createSelector(selectHome, (homeData) => homeData.count);

export { selectHome, makeSelectCount };
