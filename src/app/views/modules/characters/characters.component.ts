import { Component, OnInit } from '@angular/core';
import ICharacter from '../interfaces/characters-model';
import { ReduxService } from 'src/app/shared/redux/service/redux.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters:ICharacter[] = [];
  constructor(private readonly reduxService:ReduxService){}

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.reduxService.getCharacters().subscribe(data => {
      this.characters = data.characters;
    });
  }
}
