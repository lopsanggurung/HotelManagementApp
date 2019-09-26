import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from './../../core/material/material.module';

import { BookingCountByRoomComponent } from './booking-count-by-room/booking-count-by-room.component';
import { BookingDayCountByCountryComponent } from './booking-day-count-by-country/booking-day-count-by-country.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    MaterialModule
  ],
  declarations: [
    BookingCountByRoomComponent,
    BookingDayCountByCountryComponent
  ],
  exports: [
    BookingCountByRoomComponent,
    BookingDayCountByCountryComponent
  ]
})
export class ReportModule { }
