import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminModule } from './admin/admin.module';
import { FrontLayoutComponent } from './layouts/admin-layout/front-layout/front-layout.component';

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
    AppRoutingModule,
    SharedModule,
    AdminModule,
    
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
