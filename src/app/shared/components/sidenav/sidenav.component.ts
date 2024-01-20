import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isSidebarOpen: boolean = true;
  widthBrowser:any;
  constructor(private router:Router){}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  navigate(route:string) {
    this.router.navigate([`${route}`])
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.widthBrowser = window.innerWidth;
    if(this.widthBrowser < 768){
      this.isSidebarOpen = false;
    }else {
      this.isSidebarOpen = true
    }
  }
}
