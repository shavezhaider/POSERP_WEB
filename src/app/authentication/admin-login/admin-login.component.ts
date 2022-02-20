import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {AuthenticationService} from '../services/authentication.service'

import {NotifierService } from 'angular-notifier'
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']})
export class AdminLoginComponent implements OnInit {
  UserAuthReq:any;
  public loading: boolean;

  
  constructor(private router : Router,private authService:AuthenticationService,
    private notifier:NotifierService
    ) {
      this.UserAuthReq = { UserName: '', Password: '' }
      this.loading=false;
     }
     
  ngOnInit(): void {
    
  }
Login()
{
  
  this.UserAuthReq = { UserName: 'Admin', Password: 'Admin@123' }
  this.loading=true;
 
  this.authService.userlogin(this.UserAuthReq).subscribe(data => {
    debugger
    if(data.IsAuthSuccessful){  
      //Token
      this.notifier.notify('success', data.ErrorMessage);
      localStorage.setItem("token",data.Token);
      this.router.navigate(['admin/dashboard']);
    }
    else {
      this.notifier.notify('info', data.ErrorMessage);
    }
    this.loading=false;
  },
  error=>{
    
    this.loading=false;
  })
}  

}
