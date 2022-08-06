import { createSelector } from "reselect";
import initialState from "./reducer";

const selectHome = (state) => state.getEditUserReducer || initialState;

const makeSelectAPILocalState = () =>
  createSelector(selectHome, (homeState) => homeState.localState);
const makeSelectAPILocalData = () =>
  createSelector(selectHome, (homeData) => homeData.localData);

export { selectHome, makeSelectAPILocalData, makeSelectAPILocalState };
