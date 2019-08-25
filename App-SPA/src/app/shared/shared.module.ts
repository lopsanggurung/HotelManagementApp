import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SharedComponent,
    TimeAgoPipe
  ],
  exports: [
    FormsModule,
    TimeAgoPipe
  ]
})
export class SharedModule { }
