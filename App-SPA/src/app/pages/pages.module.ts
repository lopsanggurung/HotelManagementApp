import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

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
import { TodaysCallListResolver } from './dashboard/_resolvers/todays-call-list.resolver';
import { TomorrowsCallListResolver } from './dashboard/_resolvers/tomorrows-call-list.resolver';
import { LaundryReturnedListResolver } from './dashboard/_resolvers/laundry-returned-list.resolver';
import { PendingLaundryReturnListResolver } from './dashboard/_resolvers/pending-laundry-return-list.resolver';
import { PendingLaundryReceiveListResolver } from './dashboard/_resolvers/pending-laundry-receive-list.resolver';
import { TodaysCheckinListResolver } from './dashboard/_resolvers/todays-checkin-list.resolver';
import { TodaysCheckoutListResolver } from './dashboard/_resolvers/todays-checkout-list.resolver';
import { TodaysPendingCheckinListResolver } from './dashboard/_resolvers/todays-pending-checkin-list.resolver';
import { TodaysPendingCheckoutListResolver } from './dashboard/_resolvers/todays-pending-checkout-list.resolver';
import { ReportComponent } from './report/report.component';
import { ReportModule } from './report/report.module';
import { BookingCountByRoomResolver } from './report/_resolvers/booking-count-by-room.resolver';
import { BookingDayCountByCountryResolver } from './report/_resolvers/booking-day-count-by-country.resolver';
import { GuestCreateComponent } from './guest/guest-create/guest-create.component';
import { GuestDetailResolver } from './guest/_resolvers/guest-detail.resolver';
import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { BookingCreateComponent } from './booking/booking-create/booking-create.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingDetailResolver } from './booking/_resolvers/booking-detail.resolver';
import { RoomServiceCreateComponent } from './roomService/room-service-create/room-service-create.component';
import {
  GuestRestaurantOrderCreateComponent
} from './restaurantOrder/guest-restaurant-order-create/guest-restaurant-order-create.component';
import { LaundryServiceCreateComponent } from './laundryService/laundry-service-create/laundry-service-create.component';
import { WakeUpCallServiceCreateComponent } from './wakeUpCallService/wake-up-call-service-create/wake-up-call-service-create.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxEchartsModule,
    SharedModule,
    AdminModule,
    ReportModule,
    ManagerModule,
    DashboardModule,
    PagesRoutingModule
  ],
  providers: [
    UserListResolver,
    UserEditResolver,
    GuestListResolver,
    GuestDetailResolver,
    BookingListResolver,
    BookingDetailResolver,
    RoomListResolver,
    RoomServiceListResolver,
    LaundryServiceListResolver,
    WakeUpCallServiceListResolver,
    RestaurantOrderListResolver,
    MenuItemListResolver,
    PreventUnsavedchanges,
    TodaysCallListResolver,
    TomorrowsCallListResolver,
    LaundryReturnedListResolver,
    PendingLaundryReturnListResolver,
    PendingLaundryReceiveListResolver,
    TodaysCheckinListResolver,
    TodaysCheckoutListResolver,
    TodaysPendingCheckinListResolver,
    TodaysPendingCheckoutListResolver,
    BookingCountByRoomResolver,
    BookingDayCountByCountryResolver
  ],
  declarations: [
    PagesComponent,
    NavComponent,
    DashboardComponent,
    AdminComponent,
    ReportComponent,
    ManagerComponent,
    UserListComponent,
    UserEditComponent,
    UserManagementComponent,
    GuestListComponent,
    GuestCreateComponent,
    GuestDetailComponent,
    BookingListComponent,
    BookingCreateComponent,
    BookingDetailComponent,
    RoomListComponent,
    RoomServiceListComponent,
    RoomServiceCreateComponent,
    LaundryServiceListComponent,
    LaundryServiceCreateComponent,
    WakeUpCallServiceListComponent,
    WakeUpCallServiceCreateComponent,
    RestaurantOrderListComponent,
    GuestRestaurantOrderCreateComponent,
    MenuItemListComponent
  ]
})
export class PagesModule { }
