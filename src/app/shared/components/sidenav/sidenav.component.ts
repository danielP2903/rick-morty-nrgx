import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  isSidebarOpen: boolean = false;

  constructor(private router:Router){}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  navigate(route:string) {
    this.router.navigate([`${route}`])
  }
}
