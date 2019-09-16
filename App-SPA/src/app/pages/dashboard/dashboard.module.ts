import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodaysPendingCheckinsCheckoutsComponent } from './todays-pending-checkins-checkouts/todays-pending-checkins-checkouts.component';
import { TodaysCheckinsCheckoutsComponent } from './todays-checkins-checkouts/todays-checkins-checkouts.component';
import { PendingLaundryReturnReceiveComponent } from './pending-laundry-return-receive/pending-laundry-return-receive.component';
import { LaundryReturnedComponent } from './laundry-returned/laundry-returned.component';
import { TodaysCallsComponent } from './todays-calls/todays-calls.component';
import { TomorrowsCallsComponent } from './tomorrows-calls/tomorrows-calls.component';
import { DirtyRoomsComponent } from './dirty-rooms/dirty-rooms.component';
import { TodaysVacantRoomsComponent } from './todays-vacant-rooms/todays-vacant-rooms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodaysPendingCheckinsCheckoutsComponent,
    TodaysCheckinsCheckoutsComponent,
    PendingLaundryReturnReceiveComponent,
    LaundryReturnedComponent,
    TodaysCallsComponent,
    TomorrowsCallsComponent,
    DirtyRoomsComponent,
    TodaysVacantRoomsComponent
  ],
  exports: [
    TodaysPendingCheckinsCheckoutsComponent,
    TodaysCheckinsCheckoutsComponent,
    PendingLaundryReturnReceiveComponent,
    LaundryReturnedComponent,
    TodaysCallsComponent,
    TomorrowsCallsComponent,
    DirtyRoomsComponent,
    TodaysVacantRoomsComponent
  ]
})
export class DashboardModule { }
