import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
 
  {
    component:AboutusComponent,
    path:"about"
  },
  {
    component:PageNoFoundComponent,
    path:"**"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
