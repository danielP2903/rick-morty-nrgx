import { createReducer, on } from "@ngrx/store";
import { ILoaderState } from "../interfaces/loader";
import { statusLoader } from "../actions/common/loader.actions";

export const loaderState:ILoaderState = {
  status:false
}

export const loaderReducer = createReducer(
  loaderState,
  on(statusLoader,(state,{status}) => {return {
    ...state,
    status:status.status,
    loaded:true

  }})
)
