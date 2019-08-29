import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

import { SharedComponent } from './shared.component';
import { HasRoleDirective } from './_directives/hasRole.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SharedComponent,
    TimeAgoPipe,
    HasRoleDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TimeAgoPipe,
    HasRoleDirective
  ]
})
export class SharedModule { }
