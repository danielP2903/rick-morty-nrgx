import { createAction, props } from '@ngrx/store';
import ICharacter from 'src/app/views/modules/interfaces/characters-model';

export const getCharacters = createAction(
  '[Characters] getCharacters',
  props<{ characters: ICharacter[], loading:boolean }>()
);
export const getCharacterById = createAction(
  '[Characters] getCharacterById',
  props<{ character:ICharacter, loading:boolean }>()
);
export const errorCharacters = createAction(
  '[Characters] error', props<{error: string}>()
);

export const loadCharacterById = createAction(
  '[Characters] loadCharacterById',
  props<{ id:number }>()
);
export const loadCharacters = createAction(
  '[Characters] Loading'
);

