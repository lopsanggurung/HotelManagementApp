import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';
import { TodaysPendingCheckinsCheckoutsComponent } from './todays-pending-checkins-checkouts/todays-pending-checkins-checkouts.component';
import { TodaysCheckinsCheckoutsComponent } from './todays-checkins-checkouts/todays-checkins-checkouts.component';
import { PendingLaundryReturnReceiveComponent } from './pending-laundry-return-receive/pending-laundry-return-receive.component';
import { LaundryReturnedComponent } from './laundry-returned/laundry-returned.component';
import { TodaysCallsComponent } from './todays-calls/todays-calls.component';
import { TomorrowsCallsComponent } from './tomorrows-calls/tomorrows-calls.component';
import { DirtyRoomsComponent } from './dirty-rooms/dirty-rooms.component';
import { TodaysVacantRoomsComponent } from './todays-vacant-rooms/todays-vacant-rooms.component';
import { PendingLaundryReturnComponent } from './pending-laundry-return-receive/pending-laundry-return/pending-laundry-return.component';
import { PendingLaundryReceiveComponent } from './pending-laundry-return-receive/pending-laundry-receive/pending-laundry-receive.component';
import { TodaysCheckinsComponent } from './todays-checkins-checkouts/todays-checkins/todays-checkins.component';
import { TodaysCheckoutsComponent } from './todays-checkins-checkouts/todays-checkouts/todays-checkouts.component';
// tslint:disable-next-line: max-line-length
import { TodaysPendingCheckinsComponent } from './todays-pending-checkins-checkouts/todays-pending-checkins/todays-pending-checkins.component';
// tslint:disable-next-line: max-line-length
import { TodaysPendingCheckoutsComponent } from './todays-pending-checkins-checkouts/todays-pending-checkouts/todays-pending-checkouts.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TodaysPendingCheckinsCheckoutsComponent,
    TodaysPendingCheckinsComponent,
    TodaysPendingCheckoutsComponent,
    TodaysCheckinsCheckoutsComponent,
    TodaysCheckinsComponent,
    TodaysCheckoutsComponent,
    PendingLaundryReturnReceiveComponent,
    PendingLaundryReturnComponent,
    PendingLaundryReceiveComponent,
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
