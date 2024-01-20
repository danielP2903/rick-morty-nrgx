import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonComponent } from './components/button/button.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { InputFiltersComponent } from './components/input-filters/input-filters.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ButtonComponent,
    SkeletonComponent,
    InputSearchComponent,
    InputFiltersComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent,
    ButtonComponent,
    SkeletonComponent,
    InputSearchComponent,
    InputFiltersComponent,
  ]
})
export class SharedModule { }
