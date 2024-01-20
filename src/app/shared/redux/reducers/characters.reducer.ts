import { createReducer, on } from "@ngrx/store";
import ICharacter from "src/app/views/modules/interfaces/characters-model";
import { getCharacterById, getCharacters } from "../actions/characters.actions";
import { ICharacterByIdState } from "../interfaces/character";

export interface CharacterInitialState {
  loaded:boolean;
  characters:ICharacter[]
}

export const initialState:CharacterInitialState = {
  loaded:false,
  characters:[]
}

export const characterByIdState:ICharacterByIdState = {
  loaded:false,
  character:{}
}

export const charactersReducer = createReducer(
  initialState,
  on(getCharacters,(state,{characters}) => {
    return {
      ...state,
      characters,
      loaded:true

    }

  })
)
export const characterByIdReducer = createReducer(
  characterByIdState,
  on(getCharacterById,(state,{character}) => {return {
    ...state,
    character,
    loaded:true

  }})
)
