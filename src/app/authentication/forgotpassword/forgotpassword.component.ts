import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
private loading:boolean;
  constructor() {
    this.loading=false;
   }

  ngOnInit(): void {
  }
  forgotPassord()
  {}
}
