import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'personajes',
        loadChildren: () => import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule)
      },
      {
        path:'detalle',
        loadChildren: () => import('./pages/character-detail-page/character-detail-page.module').then(m => m.CharacterDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
