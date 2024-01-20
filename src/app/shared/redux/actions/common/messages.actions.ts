import { createAction, props } from "@ngrx/store";
import { IMessage } from "../../interfaces/messages";

export const messageStatus = createAction(
  '[Messages] success',
  props<{ message: IMessage}>()
);
