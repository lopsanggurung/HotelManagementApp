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
import { RoomServiceListComponent } from './roomService/room-service-list/room-service-list.component';
import { RoomServiceListResolver } from './roomService/_resolvers/room-service-list.resolver';
import { LaundryServiceListComponent } from './laundryService/laundry-service-list/laundry-service-list.component';
import { LaundryServiceListResolver } from './laundryService/_resolvers/laundry-service-list.resolver';
import { WakeUpCallServiceListComponent } from './wakeUpCallService/wake-up-call-service-list/wake-up-call-service-list.component';
import { WakeUpCallServiceListResolver } from './wakeUpCallService/_resolvers/wakeUpCall-service-list.resolver';
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
import { BookingCountByRoomResolver } from './report/_resolvers/booking-count-by-room.resolver';
import { BookingDayCountByCountryResolver } from './report/_resolvers/booking-day-count-by-country.resolver';
import { GuestCreateComponent } from './guest/guest-create/guest-create.component';
import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { GuestDetailResolver } from './guest/_resolvers/guest-detail.resolver';
import { BookingCreateComponent } from './booking/booking-create/booking-create.component';
import { BookingDetailComponent } from './booking/booking-detail/booking-detail.component';
import { BookingDetailResolver } from './booking/_resolvers/booking-detail.resolver';
import { RoomServiceCreateComponent } from './roomService/room-service-create/room-service-create.component';
import {
  GuestRestaurantOrderCreateComponent
} from './restaurantOrder/guest-restaurant-order-create/guest-restaurant-order-create.component';
import { LaundryServiceCreateComponent } from './laundryService/laundry-service-create/laundry-service-create.component';
import { WakeUpCallServiceCreateComponent } from './wakeUpCallService/wake-up-call-service-create/wake-up-call-service-create.component';
import { RoomServiceDetailComponent } from './roomService/room-service-detail/room-service-detail.component';
import { RoomServiceDetailResolver } from './roomService/_resolvers/room-service-detail.resolver';
import { RestaurantOrderDetailComponent } from './restaurantOrder/restaurant-order-detail/restaurant-order-detail.component';
import { RestaurantOrderDetailResolver } from './restaurantOrder/_resolvers/restaurant-order-detail.resolver';
import { LaundryServiceDetailComponent } from './laundryService/laundry-service-detail/laundry-service-detail.component';
import { LaundryServiceDetailResolver } from './laundryService/_resolvers/laundry-service-detail.resolver';
import { WakeUpCallServiceDetailComponent } from './wakeUpCallService/wake-up-call-service-detail/wake-up-call-service-detail.component';
import { WakeUpCallServiceDetailResolver } from './wakeUpCallService/_resolvers/wakeUpCall-service-detail.resolver';
import { GuestEditComponent } from './guest/guest-edit/guest-edit.component';
import { GuestEditResolver } from './guest/_resolvers/guest-edit.resolver';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';
import { BookingEditResolver } from './booking/_resolvers/booking-edit.resolver';
import { RoomServiceEditComponent } from './roomService/room-service-edit/room-service-edit.component';
import { RoomServiceEditResolver } from './roomService/_resolvers/room-service-edit.resolver';
import { LaundryServiceEditComponent } from './laundryService/laundry-service-edit/laundry-service-edit.component';
import { LaundryServiceEditResolver } from './laundryService/_resolvers/laundry-service-edit.resolver';
import { WakeUpCallServiceEditComponent } from './wakeUpCallService/wake-up-call-service-edit/wake-up-call-service-edit.component';
import { WakeUpCallServiceEditResolver } from './wakeUpCallService/_resolvers/wakeUpCall-service-edit.resolver';
import { RestaurantOrderEditComponent } from './restaurantOrder/restaurant-order-edit/restaurant-order-edit.component';
import { RestaurantOrderEditResolver } from './restaurantOrder/_resolvers/restaurant-order-edit.resolver';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        resolve: {
          todaysCalls: TodaysCallListResolver,
          tomorrowsCalls: TomorrowsCallListResolver,
          laundryReturnedToday: LaundryReturnedListResolver,
          pendingLaundryReturn: PendingLaundryReturnListResolver,
          pendingLaundryReceive: PendingLaundryReceiveListResolver,
          todaysCheckins: TodaysCheckinListResolver,
          todaysCheckouts: TodaysCheckoutListResolver,
          todaysPendingCheckins: TodaysPendingCheckinListResolver,
          todaysPendingCheckouts: TodaysPendingCheckoutListResolver
        }
      },
      {
        path: 'bookings',
        component: BookingListComponent,
        resolve: { bookings: BookingListResolver }
      },
      {
        path: 'bookings/:id',
        component: BookingDetailComponent,
        resolve: { booking: BookingDetailResolver }
      },
      {
        path: 'bookings/:id/edit',
        component: BookingEditComponent,
        resolve: { booking: BookingEditResolver, rooms: RoomListResolver },
        // canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'bookings/:id/roomServices/create',
        component: RoomServiceCreateComponent,
        resolve: { menuItems: MenuItemListResolver }
      },
      {
        path: 'bookings/:id/restaurantOrders/create',
        component: GuestRestaurantOrderCreateComponent,
        resolve: { menuItems: MenuItemListResolver }
      },
      {
        path: 'bookings/:id/laundryServices/create',
        component: LaundryServiceCreateComponent
      },
      {
        path: 'bookings/:id/wakeUpCallServices/create',
        component: WakeUpCallServiceCreateComponent
      },
      {
        path: 'guests',
        component: GuestListComponent,
        resolve: { guests: GuestListResolver }
      },
      {
        path: 'guests/create',
        component: GuestCreateComponent
      },
      {
        path: 'guests/:id',
        component: GuestDetailComponent,
        resolve: { guest: GuestDetailResolver }
      },
      {
        path: 'guests/:id/edit',
        component: GuestEditComponent,
        resolve: { guest: GuestEditResolver },
        canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'guests/:id/bookings/create',
        component: BookingCreateComponent,
        resolve: { rooms: RoomListResolver }
      },
      {
        path: 'rooms',
        component: RoomListComponent,
        resolve: { rooms: RoomListResolver }
      },
      {
        path: 'roomServices',
        component: RoomServiceListComponent,
        resolve: { roomServices: RoomServiceListResolver }
      },
      {
        path: 'roomServices/:id',
        component: RoomServiceDetailComponent,
        resolve: { roomService: RoomServiceDetailResolver }
      },
      {
        path: 'roomServices/:id/edit',
        component: RoomServiceEditComponent,
        resolve: { roomService: RoomServiceEditResolver, menuItems: MenuItemListResolver },
        // canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'laundryServices',
        component: LaundryServiceListComponent,
        resolve: { laundryServices: LaundryServiceListResolver }
      },
      {
        path: 'laundryServices/:id',
        component: LaundryServiceDetailComponent,
        resolve: { laundryService: LaundryServiceDetailResolver }
      },
      {
        path: 'laundryServices/:id/edit',
        component: LaundryServiceEditComponent,
        resolve: { laundryService: LaundryServiceEditResolver },
        // canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'wakeUpCallServices',
        component: WakeUpCallServiceListComponent,
        resolve: { wakeUpCallServices: WakeUpCallServiceListResolver }
      },
      {
        path: 'wakeUpCallServices/:id',
        component: WakeUpCallServiceDetailComponent,
        resolve: { wakeUpCallService: WakeUpCallServiceDetailResolver }
      },
      {
        path: 'wakeUpCallServices/:id/edit',
        component: WakeUpCallServiceEditComponent,
        resolve: { wakeUpCallService: WakeUpCallServiceEditResolver },
        // canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'restaurantOrders',
        component: RestaurantOrderListComponent,
        resolve: { restaurantOrders: RestaurantOrderListResolver }
      },
      {
        path: 'restaurantOrders/:id',
        component: RestaurantOrderDetailComponent,
        resolve: { restaurantOrder: RestaurantOrderDetailResolver }
      },
      {
        path: 'restaurantOrders/:id/edit',
        component: RestaurantOrderEditComponent,
        resolve: { restaurantOrder: RestaurantOrderEditResolver },
        // canDeactivate: [PreventUnsavedchanges]
      },
      {
        path: 'menuItems',
        component: MenuItemListComponent,
        resolve: { menuItems: MenuItemListResolver }
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
        path: 'report',
        component: ReportComponent,
        resolve: {
          bookingCountByRoom: BookingCountByRoomResolver,
          bookingDayCountByCountry: BookingDayCountByCountryResolver
        },
        data: { roles: ['Admin'] }
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
