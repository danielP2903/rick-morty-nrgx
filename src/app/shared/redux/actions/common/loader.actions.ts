import { createAction, props } from "@ngrx/store";
import { ILoaderState } from "../../interfaces/loader";

export const statusLoader = createAction(
  '[Loader] status',
  props<{ status: ILoaderState}>()
);
