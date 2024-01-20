import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store';
import { RickMortyService } from 'src/app/views/modules/services/rick-morty/rick-morty.service';
import { AppState } from '../reducers/app.state';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as charactersActions from '../actions/characters.actions';
import { Injectable } from '@angular/core';
import { ReduxService } from '../service/redux.service';
import { MESSAGES } from '../../utils/constants';
import { IMessage } from '../interfaces/messages';

@Injectable()
export class CharacterEffects {

  constructor(private readonly characterService: RickMortyService,
    private readonly reduxService:ReduxService,
    private readonly store: Store<AppState>,
    private readonly actions$: Actions) { }

  getCharacters$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(charactersActions.loadCharacters),
      exhaustMap(() => this.characterService.getCharacters()
        .pipe(
          map(data => {
            this.reduxService.setMessage({message:MESSAGES.CHARACTERS_SUCCESFULL,status:'Success'})
           return { type: '[Characters] getCharacters', characters: data.results.map((char) => ({ ...char, selected: false })) }
          }

            ),
          catchError((error) => of(charactersActions.errorCharacters({ error })))
        ))
    );
  }
  );

  getCharacterById$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(charactersActions.loadCharacterById),
      exhaustMap(({ id }) => this.characterService.getCharacterById(id)
        .pipe(
          map(data => {
            const message:IMessage = {message:`${MESSAGES.CHARACTER_ID_SUCCESS} ${data.name} ` ,status:'Success'}
            this.reduxService.setMessage({...message})
           return { type: '[Characters] getCharacterById', character: data }
          }
            ),
          catchError((error) => of(charactersActions.errorCharacters({ error })))
        ))
    );
  }
  );
}
