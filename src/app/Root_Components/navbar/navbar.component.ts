import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['/'])
  }
  
  // This is the Logic of the Nav Bar
  _isActiveHome: boolean = true;
  _isActiveSearch: boolean = false;

  setActiveTab(isHome: boolean) {
    this._isActiveHome = isHome;
    this._isActiveSearch = !isHome;
  }



}
