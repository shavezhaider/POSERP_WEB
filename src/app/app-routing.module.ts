import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import { AdminDashboardLayoutComponent } from './admin/Shared/admin-dashboard-layout/admin-dashboard-layout.component';

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
  path:"admin",
  
  loadChildren:()=>import('./admin/admin.module').
  then(mod=>mod.AdminModule)
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
