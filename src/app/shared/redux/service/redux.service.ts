import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.state';
import { Observable, take } from 'rxjs';
import { selectCharacters } from '../selectors/characters.selector';
import { loadCharacters } from '../actions/characters.actions';
import { CharacterInitialState } from '../reducers/characters.reducer';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {
  private characters$:Observable<CharacterInitialState> = new Observable();
  constructor(private store: Store<AppState>,) { }

  getCharacters(): Observable<CharacterInitialState>{
    this.store.dispatch(loadCharacters())
   this.characters$ = this.store.select(selectCharacters)
    return this.characters$;
  }
}
