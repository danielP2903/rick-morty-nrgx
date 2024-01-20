import { ActionReducerMap } from '@ngrx/store';
import * as charactersReducer  from './characters.reducer';
import * as loaderReducer  from './loader.reducer';
import * as messageReducer  from './messages.reducer';
import { ICharacterByIdState } from '../interfaces/character';
import { ILoaderState } from '../interfaces/loader';
import { IMessage } from '../interfaces/messages';
export interface AppState {
  characters:charactersReducer.CharacterInitialState,
  characterById:ICharacterByIdState,
  loader:ILoaderState,
  message:IMessage
}

export const appReducers:ActionReducerMap<AppState> = {
  characters:charactersReducer.charactersReducer,
  characterById:charactersReducer.characterByIdReducer,
  loader:loaderReducer.loaderReducer,
  message:messageReducer.messageReducer
}
