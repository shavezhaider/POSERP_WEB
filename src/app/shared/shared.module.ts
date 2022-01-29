import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
  ],exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
