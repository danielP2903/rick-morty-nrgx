import { Component, Input } from '@angular/core';
import ICharacter from '../../interfaces/characters-model';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {
@Input() charactersList:ICharacter[] = [];
}
