import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() text:string = '';
@Input() isFloat:boolean = false;
@Output() emitAction = new EventEmitter<boolean>();
widthBrowser:any;
float:boolean=false;
 actionButton() {
  this.emitAction.emit(true);
 }

 @HostListener('window:resize', ['$event'])
 onResize(event: Event): void {
   this.widthBrowser = window.innerWidth;
   if(this.widthBrowser < 768){
     this.float = true;
   }else {
     this.float = false
   }
 }
}
