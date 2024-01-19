import { Component, OnInit } from '@angular/core';
import ICharacter from '../../interfaces/characters-model';
import { RickMortyService } from '../../services/rick-morty/rick-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character!:ICharacter;

  constructor(private readonly characterService:RickMortyService){}

  ngOnInit(): void {
   this.getCharacterById();
 }

   getCharacterById() {
     this.characterService.getCharacterById(1).subscribe(data => {
       this.character = data;
     })
   }
}
