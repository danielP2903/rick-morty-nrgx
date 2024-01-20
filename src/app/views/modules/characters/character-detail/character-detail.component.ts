import { Component, OnDestroy, OnInit } from '@angular/core';
import ICharacter from '../../interfaces/characters-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReduxService } from 'src/app/shared/redux/service/redux.service';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/shared/redux/service/store.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character!:ICharacter;
  identifier!:number;
  public showLoader = false;
  public $loaderSubscription!:Subscription;
  charactersub$!:Subscription;
  public charactersSelected:ICharacter[] = [];
  public characterShow!:ICharacter;
  characterByIdsub$!:Subscription;
  constructor(private readonly reduxService:ReduxService,
              private readonly router:Router,
              private readonly store:StoreService){}

  ngOnDestroy(): void {
   if(this.$loaderSubscription) this.$loaderSubscription.unsubscribe();
   if(this.charactersub$) this.charactersub$.unsubscribe();
   if(this.characterByIdsub$) this.characterByIdsub$.unsubscribe();
  }

  ngOnInit(): void {
    this.getCharactersSelected();
    this.getLoader();
 }

   getCharacterById(id:number) {
    this.characterByIdsub$ = this.reduxService.getCharacterById(id).subscribe(data => {
       this.character = data.character as ICharacter;
       this.characterShow = this.character;
     })
   }

   getCharactersSelected() {
    this.charactersub$ = this.store.getCharactersStore().subscribe((data) => {
      if(!data || data.characters.length === 0) this.navigateListCharacters();
      this.charactersSelected = data.characters.filter((char) => char.selected === true);
      this.characterShow = this.charactersSelected.sort((a,b) => a.id - b.id)[0];
      if(this.characterShow){
        this.getCharacterById(this.characterShow.id);
      }
    })
   }
   navigateListCharacters() {
    this.router.navigate(['personajes'])
   }
   getLoader(){
    this.$loaderSubscription = this.reduxService.getStatusLoader().subscribe((status) => this.showLoader = status);
  }
}
