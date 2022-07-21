import { createSelector } from "reselect";

const selectDirecory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirecory],
  (directory) => directory.sections
);
