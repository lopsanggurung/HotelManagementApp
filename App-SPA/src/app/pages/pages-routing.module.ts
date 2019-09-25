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
        path: 'roomServices',
        component: RoomServiceListComponent,
        resolve: { roomServices: RoomServiceListResolver }
      },
      {
        path: 'laundryServices',
        component: LaundryServiceListComponent,
        resolve: { laundryServices: LaundryServiceListResolver }
      },
      {
        path: 'wakeUpCallServices',
        component: WakeUpCallServiceListComponent,
        resolve: { wakeUpCallServices: WakeUpCallServiceListResolver }
      },
      {
        path: 'restaurantOrders',
        component: RestaurantOrderListComponent,
        resolve: { restaurantOrders: RestaurantOrderListResolver }
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
          bookingCountByRoom: BookingCountByRoomResolver
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
