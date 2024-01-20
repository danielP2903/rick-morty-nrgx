import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.state';
import { CharacterInitialState } from '../reducers/characters.reducer';
import { Observable } from 'rxjs';
import { selectCharacters } from '../selectors/characters.selector';
import { selectLoaderStore } from '../selectors/loader.selector';
import { IMessage } from '../interfaces/messages';
import { selectMessageStore } from '../selectors/message.selector';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private characters$:Observable<CharacterInitialState> = new Observable();

  constructor(private store: Store<AppState>,) { }

  getCharactersStore(): Observable<CharacterInitialState>{
   this.characters$ = this.store.select(selectCharacters);
    return this.characters$;
  }
  getStatusLoader():Observable<boolean> {
    return this.store.select(selectLoaderStore)
  }

  getMessage() :Observable<IMessage>{
    return this.store.select(selectMessageStore)
  }


}
