import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.state";
import { IMessage } from "../interfaces/messages";

export const selectMessage = (state: AppState) => state.message;
export const selectMessageStore = createSelector(
  selectMessage,
  (state: IMessage) => state
);
