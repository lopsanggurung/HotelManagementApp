import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesComponent } from './pages.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListResolver } from './user/_resolvers/user-list.resolver';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AdminModule,
    DashboardModule,
    PagesRoutingModule
  ],
  providers: [UserListResolver],
  declarations: [PagesComponent, NavComponent, DashboardComponent, AdminComponent, UserListComponent]
})
export class PagesModule { }
