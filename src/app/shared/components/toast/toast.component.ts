import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReduxService } from '../../redux/service/redux.service';
import { StatusMessage } from '../../redux/interfaces/messages';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges {
  @Input() message!:string;
  @Input() status!:StatusMessage;
  showToast:boolean = false;
  bgColor!:string;
  constructor(private readonly reduxService:ReduxService){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['message'].currentValue){
      this.showToast = true;
      this.colorToast();
      this.hideToast();
    }

  }

  hideToast() {
    setTimeout(() => {
      this.reduxService.setMessage({message:'',status:''})
      this.showToast = false;
    }, 3000);
  }

  colorToast() {
    if(this.status === 'Success'){
      this.bgColor = 'bg-green-500';
    }else if(this.status ==='Error'){
      this.bgColor = 'bg-red-500	';
    }else {
      this.bgColor = 'gray-500';

    }

  }
}
