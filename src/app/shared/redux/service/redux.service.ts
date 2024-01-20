import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.state';
import { Observable } from 'rxjs';
import { selectCharacterById, selectCharacters, selectCharactersList } from '../selectors/characters.selector';
import { loadCharacterById, loadCharacters,getCharacters as getCharacteerAction } from '../actions/characters.actions';
import { ICharacterByIdState } from '../interfaces/character';
import { selectLoaderStore } from '../selectors/loader.selector';
import { statusLoader } from '../actions/common/loader.actions';
import ICharacter from 'src/app/views/modules/interfaces/characters-model';
import * as messagesActions from '../actions/common/messages.actions';
import { IMessage } from '../interfaces/messages';

@Injectable({
  providedIn: 'root'
})
export class ReduxService {
  private characters$:Observable<ICharacter[]> = new Observable();
  private characterById$:Observable<ICharacterByIdState> = new Observable();
  constructor(private store: Store<AppState>) { }



  getCharacterById(id:number):Observable<ICharacterByIdState> {
    this.store.dispatch(loadCharacterById({id}));
    this.characterById$ = this.store.select(selectCharacterById)
    return this.characterById$;
  }

  getStatusLoader():Observable<boolean> {
    return this.store.select(selectLoaderStore)
  }
  setStatusLoader(status:boolean) {
    this.store.dispatch(statusLoader({status:{status}}))
  }

  selectCharacter(characters:ICharacter[]){
    this.store.dispatch(getCharacteerAction({characters,loading:true}))
  }
  getCharacters(): Observable<ICharacter[]>{
    this.store.dispatch(loadCharacters())
   this.characters$ = this.store.select(selectCharactersList);
    return this.characters$;
  }
  setMessage(message:IMessage):void {
   this.store.dispatch(messagesActions.messageStatus({message:{...message}})) ;
  }
}
