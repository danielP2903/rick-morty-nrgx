import { createReducer, on } from "@ngrx/store";
import ICharacter from "src/app/views/modules/interfaces/characters-model";
import { getCharacters } from "../actions/characters.actions";

export interface CharacterInitialState {
  loaded:boolean;
  characters:ICharacter[]
}

export const initialState:CharacterInitialState = {
  loaded:false,
  characters:[]
}

export const charactersReducer = createReducer(
  initialState,
  on(getCharacters,(state,{characters}) => {return {
    ...state,
    characters,
    loaded:true

  }})
)
