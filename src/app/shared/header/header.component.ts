import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public LogoUrl: string = "undefined";
  public IsUserLoggedIn :boolean=false
  constructor() { }

  ngOnInit(): void {
  }
async onLogin()
{
  
}
}
