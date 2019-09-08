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
import { UserListResolver } from './user/_resolvers/user-list.resolver';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserEditResolver } from './user/_resolvers/user-edit.resolver';
import { PreventUnsavedchanges } from './user/_guards/prevent-unsaved-changes.guard';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { GuestListComponent } from './guest/guest-list/guest-list.component';
import { GuestListResolver } from './guest/_resolvers/guest-list.resolver';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingListResolver } from './booking/_resolvers/booking-list.resolver';
import { RoomListResolver } from './room/_resolvers/room-list.resolver';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomServiceListResolver } from './roomService/_resolvers/room-service-list.resolver';
import { RoomServiceListComponent } from './roomService/room-service-list/room-service-list.component';
import { LaundryServiceListResolver } from './laundryService/_resolvers/laundry-service-list.resolver';
import { LaundryServiceListComponent } from './laundryService/laundry-service-list/laundry-service-list.component';
import { WakeUpCallServiceListResolver } from './wakeUpCallService/_resolvers/wakeUpCall-service-list.resolver';
import { WakeUpCallServiceListComponent } from './wakeUpCallService/wake-up-call-service-list/wake-up-call-service-list.component';
import { RestaurantOrderListResolver } from './restaurantOrder/_resolvers/restaurant-order-list.resolver';
import { RestaurantOrderListComponent } from './restaurantOrder/restaurant-order-list/restaurant-order-list.component';
import { MenuItemListResolver } from './menuItem/_resolvers/menu-item-list.resolver';
import { MenuItemListComponent } from './menuItem/menu-item-list/menu-item-list.component';

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
    GuestListResolver,
    BookingListResolver,
    RoomListResolver,
    RoomServiceListResolver,
    LaundryServiceListResolver,
    WakeUpCallServiceListResolver,
    RestaurantOrderListResolver,
    MenuItemListResolver,
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
    UserManagementComponent,
    GuestListComponent,
    BookingListComponent,
    RoomListComponent,
    RoomServiceListComponent,
    LaundryServiceListComponent,
    WakeUpCallServiceListComponent,
    RestaurantOrderListComponent,
    MenuItemListComponent
  ]
})
export class PagesModule { }
