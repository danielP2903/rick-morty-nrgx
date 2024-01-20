import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.state";
import { CharacterInitialState } from "../reducers/characters.reducer";
import { ICharacterByIdState } from "../interfaces/character";
export const selectCharacters = (state: AppState) => state.characters;
export const selectCharacterById = (state: AppState) => state.characterById;

export const selectCharactersList = createSelector(
  selectCharacters,
  (state: CharacterInitialState) => state.characters
);
export const selectCharacterByIdStore = createSelector(
  selectCharacterById,
  (state: ICharacterByIdState) => state.character
);
