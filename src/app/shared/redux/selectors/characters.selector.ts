import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/app.state";
import { CharacterInitialState } from "../reducers/characters.reducer";
export const selectCharacters = (state: AppState) => state.characters;

export const selectCharactersList = createSelector(
  selectCharacters,
  (state: CharacterInitialState) => state.characters
);
