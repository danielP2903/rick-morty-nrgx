import { Component } from '@angular/core';
import { ReduxService } from './shared/redux/service/redux.service';
import { StoreService } from './shared/redux/service/store.service';
import { StatusMessage } from './shared/redux/interfaces/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'challenge-geeks-castle';
  public showLoader = false;
  public message!:string;
  public statusMessage!:StatusMessage;
  constructor(private readonly store: StoreService){
    this.getLoader();
    this.getMessage();
  }

  getLoader(){
     this.store.getStatusLoader().subscribe((status) => this.showLoader = status);
  }

  getMessage(){
    this.store.getMessage().subscribe(({message,status})  => {
      this.message = message;
      this.statusMessage = status
    })
  }
}
