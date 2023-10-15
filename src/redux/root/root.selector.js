import { createSelector } from "reselect";
export const cardsSelector = createSelector(
  (state) => state.rootReducer,
  (state) => state.cards,
);
