import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http'
import {NotifierModule} from 'angular-notifier'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminModule } from './admin/admin.module';
import { FrontLayoutComponent } from './layouts/admin-layout/front-layout/front-layout.component';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    AboutusComponent,
    ContactUsComponent,
    PageNoFoundComponent,
    AdminLayoutComponent,
    FrontLayoutComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    AuthenticationModule,
    
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
