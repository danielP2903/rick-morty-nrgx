import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import ICharacter from 'src/app/views/modules/interfaces/characters-model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {

  @Input() character!:ICharacter;

  constructor(private readonly router:Router){}

  viewDetail() {
    this.router.navigate(['detalle']);
  }
}
