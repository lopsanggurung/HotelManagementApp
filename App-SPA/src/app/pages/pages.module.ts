import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { ManagerModule } from './manager/manager.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesComponent } from './pages.component';
import { NavComponent } from './shared/nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListResolver } from './user/_resolvers/user-edit.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './user/_resolvers/user-list.resolver';
import { PreventUnsavedchanges } from './user/_guards/prevent-unsaved-changes.guard';
import { UserManagementComponent } from './admin/user-management/user-management.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AdminModule,
    ManagerModule,
    DashboardModule,
    PagesRoutingModule
  ],
  providers: [
    UserListResolver,
    UserEditResolver,
    PreventUnsavedchanges
  ],
  declarations: [
    PagesComponent,
    NavComponent,
    DashboardComponent,
    AdminComponent,
    ManagerComponent,
    UserListComponent,
    UserEditComponent,
    UserManagementComponent
  ]
})
export class PagesModule { }
