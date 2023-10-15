import { createSelector } from "reselect";
export const modalSelector = createSelector(
  (state) => state.homeReducer,
  (state) => state
);
