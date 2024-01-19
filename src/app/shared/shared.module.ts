import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    SidenavComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidenavComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
