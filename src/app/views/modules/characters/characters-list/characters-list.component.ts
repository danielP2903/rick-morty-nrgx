import { Component, EventEmitter, Input, Output } from '@angular/core';
import ICharacter from '../../interfaces/characters-model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
@Input() charactersList:ICharacter[] = [];
@Output() characterSelected = new EventEmitter<ICharacter>();


  emitCharacter(char:ICharacter) {
    this.characterSelected.emit({...char});
  }
}
