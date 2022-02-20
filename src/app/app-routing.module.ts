import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './layouts/admin-layout/front-layout/front-layout.component';
import { AdminLoginComponent } from './authentication/admin-login/admin-login.component';

const routes: Routes = [
 
  {
    
    path:"",
    component:FrontLayoutComponent,
    children:[{path:"",component:HomeComponent}]
  },
  
 
   {  
    path:"admin",
    component:AdminLayoutComponent,            
    loadChildren:()=>import('./admin/admin.module').
    then(mod=>mod.AdminModule)  
    },
    
    {  
      path:"",      
      loadChildren:()=>import('./authentication/authentication.module').
      then(mod=>mod.AuthenticationModule)  
  
      },
  
 
  {
    
    path:"about",
    component:FrontLayoutComponent,
    children:[{path:"",component:AboutusComponent}]
  },
 
  {
    
    path:"**",
    component:FrontLayoutComponent,
    children:[{path:"",component:PageNoFoundComponent}]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
