import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../assets/stylesheets/static.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false;

  constructor() { }

  ngOnInit() {

  }

}
