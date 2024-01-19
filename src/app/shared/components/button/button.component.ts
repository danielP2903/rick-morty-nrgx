import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() text:string = '';
@Output() emitAction = new EventEmitter<boolean>();

 actionButton() {
  this.emitAction.emit(true);
 }
}
