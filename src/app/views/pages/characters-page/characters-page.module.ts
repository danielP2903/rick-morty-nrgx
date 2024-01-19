import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { CharactersPageComponent } from './characters-page.component';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { CharactersComponent } from '../../modules/characters/characters.component';
import { CharactersListComponent } from '../../modules/characters/characters-list/characters-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CharactersPageComponent,
    CharacterCardComponent,
    CharactersComponent,
    CharactersListComponent,

  ],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    SharedModule
  ]
})
export class CharactersPageModule { }
