import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import ICharacter from 'src/app/views/modules/interfaces/characters-model';
import { RickMortyService } from 'src/app/views/modules/services/rick-morty/rick-morty.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent  {

  @Input() character!:ICharacter;

  constructor(){

  }


}
