import {Actions, createEffect, ofType} from '@ngrx/effects'
import { Store } from '@ngrx/store';
import { RickMortyService } from 'src/app/views/modules/services/rick-morty/rick-morty.service';
import { AppState } from '../reducers/app.state';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as charactersActions from '../actions/characters.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterEffects {

  constructor(private readonly characterService: RickMortyService,
              private readonly store: Store<AppState>,
              private readonly actions$: Actions){}

  getCharacters$ = createEffect(() => {

    return this.actions$.pipe(
    ofType(charactersActions.loadCharacters),
    exhaustMap(() => this.characterService.getCharacters()
      .pipe(
        map(data => (

          { type: '[Characters] getCharacters', characters: data.results })),
        catchError((error) => of(charactersActions.errorCharacters({error})))
      ))
    ); }
  );
}
