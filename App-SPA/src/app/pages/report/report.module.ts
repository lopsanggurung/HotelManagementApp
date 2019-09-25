import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from './../../core/material/material.module';

import { BookingCountByRoomComponent } from './booking-count-by-room/booking-count-by-room.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    MaterialModule
  ],
  declarations: [
    BookingCountByRoomComponent
  ],
  exports: [
    BookingCountByRoomComponent
  ]
})
export class ReportModule { }
