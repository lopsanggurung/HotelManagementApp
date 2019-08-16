import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [MaterialModule, LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class CoreModule { }
