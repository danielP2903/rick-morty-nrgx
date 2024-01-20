import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailPageRoutingModule } from './character-detail-page-routing.module';
import { CharacterDetailPageComponent } from './character-detail-page.component';
import { CharacterDetailComponent } from '../../modules/characters/character-detail/character-detail.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CharacterDetailPageComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterDetailPageRoutingModule,
    SharedModule
  ]
})
export class CharacterDetailPageModule { }
