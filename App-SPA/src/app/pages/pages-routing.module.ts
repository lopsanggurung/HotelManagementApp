import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../core/auth.guard';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserListResolver } from './user/_resolvers/user-list.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './user/_resolvers/user-edit.resolver';
import { PreventUnsavedchanges } from './user/_guards/prevent-unsaved-changes.guard';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { GuestListResolver } from './guest/_resolvers/guest-list.resolver';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingListResolver } from './booking/_resolvers/booking-list.resolver';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomListResolver } from './room/_resolvers/room-list.resolver';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'bookings',
        component: BookingListComponent,
        resolve: { bookings: BookingListResolver }
      },
      {
        path: 'guests',
        component: GuestListComponent,
        resolve: { guests: GuestListResolver }
      },
      {
        path: 'rooms',
        component: RoomListComponent,
        resolve: { rooms: RoomListResolver }
      },
      {
        path: 'users',
        component: UserListComponent,
        resolve: { users: UserListResolver }
      },
      {
        path: 'user/edit',
        component: UserEditComponent,
        resolve: { user: UserEditResolver },
        canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'manager',
        component: ManagerComponent,
        data: { roles: ['Admin', 'Manager'] }
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { roles: ['Admin'] }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
