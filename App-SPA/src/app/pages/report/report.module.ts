import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from './../../core/material/material.module';

import { BookingCountByMonthComponent } from './booking-count-by-month/booking-count-by-month.component';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    MaterialModule
  ],
  declarations: [
    BookingCountByMonthComponent
  ],
  exports: [
    BookingCountByMonthComponent
  ]
})
export class ReportModule { }
