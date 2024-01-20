import { Component, OnDestroy, OnInit } from '@angular/core';
import ICharacter from '../interfaces/characters-model';
import { ReduxService } from 'src/app/shared/redux/service/redux.service';
import { Subscription } from 'rxjs';
import { RickMortyService } from '../services/rick-morty/rick-morty.service';
import { Router } from '@angular/router';
import { MESSAGES } from 'src/app/shared/utils/constants';
import { IMessage } from 'src/app/shared/redux/interfaces/messages';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit,OnDestroy {
  characters:ICharacter[] = [];
  public showLoader = false;
  public $loaderSubscription!:Subscription;
  public $characters!:Subscription;
  public arrayIteration = new Array<number>(20);
  public charactersSelected:ICharacter[] = [];
  constructor(private readonly reduxService:ReduxService,
              private readonly router:Router){}
  ngOnDestroy(): void {
    this.$characters.unsubscribe();
    this.$loaderSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getLoader();
    this.getCharacters();
  }
  getCharacters() {
   this.$characters = this.reduxService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }
  getLoader(){
    this.$loaderSubscription = this.reduxService.getStatusLoader().subscribe((status) => this.showLoader = status);
  }

  selectCharacter(character:ICharacter) {
    let characters:ICharacter[] = [];
    let characterSearch

       characterSearch = this.charactersSelected.some((char) => char.id === character.id);

       characters = this.characters.map((char) =>{

        if(character.id === char.id) {
          if(!char.selected  && this.charactersSelected.length < 3){
            return {...char,selected:true}
          }else {
            characterSearch = this.charactersSelected.find((charac) => char.id === charac.id);

            if(characterSearch){
             this.charactersSelected = this.charactersSelected.filter((data) => data.id !== char.id)
            }

            return {...char,selected:false}

          }
        }
        return {...char}
      });

    if(this.charactersSelected.length >=3 ) {
      const message:IMessage ={message:MESSAGES.MAXIMUM_CHARACTERS_EXCEDED,status:'Error',uuid:uuidv4()}
      this.reduxService.setMessage({...message});
      this.reduxService.selectCharacter(characters);

    }else {
      if(!characterSearch){
        this.charactersSelected.push(character);
      }
      this.reduxService.selectCharacter(characters);
    }


  }

  navigateDetail() {
    this.router.navigate(['detalle'])
  }


}
