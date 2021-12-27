import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../drawer.service';

@Component({
  selector: '[app-appbar]',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

  constructor(private sidenav: DrawerService) {

  }
 toggleActive:boolean = false;

 toggleRightSidenav() {
   this.toggleActive = !this.toggleActive;
   this.sidenav.toggle();

   console.log('Clicked');
 }
  

  ngOnInit(): void {
  }

}
