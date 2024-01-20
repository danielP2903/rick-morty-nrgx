import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.state";
import { ILoaderState } from "../interfaces/loader";

export const selectLoader = (state: AppState) => state.loader;
export const selectLoaderStore = createSelector(
  selectLoader,
  (state: ILoaderState) => state.status
);
