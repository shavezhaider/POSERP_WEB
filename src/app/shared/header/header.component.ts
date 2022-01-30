import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public LogoUrl: string = "undefined";
  public IsUserLoggedIn :boolean=false
  @Input() title: string = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  // console.warn(this.router.url);
    
     console.warn('header')
  
  }
async onLogin()
{
  
}
}
