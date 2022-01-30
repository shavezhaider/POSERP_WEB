import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNoFoundComponent } from '../page-no-found/page-no-found.component';

import {AdminLoginComponent} from './admin-login/admin-login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminDashboardLayoutComponent} from './Shared/admin-dashboard-layout/admin-dashboard-layout.component';

const routes: Routes = [
 {path:'',component:AdminLoginComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:"**",component: PageNoFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
