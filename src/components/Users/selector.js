import { createSelector } from "reselect";
import initialState from "./reducer";

const selectHomeAPI = (state) => state.users || initialState;

const makeSelectUsers = () =>
  createSelector(selectHomeAPI, (homeState) => homeState.data);

// const makeSelectUsersData = () =>
//   createSelector(selectHomeAPI, (homeData) => homeData.localData);

export { selectHomeAPI, makeSelectUsers };
