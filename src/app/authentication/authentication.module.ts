import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[AdminLoginComponent]
})
export class AuthenticationModule { }
