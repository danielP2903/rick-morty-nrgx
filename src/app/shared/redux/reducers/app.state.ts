import { ActionReducerMap } from '@ngrx/store';
import * as charactersReducer  from './characters.reducer';
export interface AppState {
  characters:charactersReducer.CharacterInitialState
}

export const appReducers:ActionReducerMap<AppState> = {
  characters:charactersReducer.charactersReducer
}
