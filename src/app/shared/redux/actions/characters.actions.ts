import { createAction, props } from '@ngrx/store';
import ICharacter from 'src/app/views/modules/interfaces/characters-model';

export const getCharacters = createAction(
  '[Characters] getCharacters',
  props<{ characters: ICharacter[], loading:boolean }>()
);
export const errorCharacters = createAction(
  '[Characters] error', props<{error: string}>()
);
export const loadCharacters = createAction(
  '[Characters] Loading'
);
