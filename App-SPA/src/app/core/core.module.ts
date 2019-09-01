import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AuthGuard } from './auth.guard';
import { ErrorInterceptorProvider } from './error.interceptor';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [AuthGuard, ErrorInterceptorProvider],
  declarations: [CoreComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [BrowserAnimationsModule, HttpClientModule, MaterialModule, LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class CoreModule { }
