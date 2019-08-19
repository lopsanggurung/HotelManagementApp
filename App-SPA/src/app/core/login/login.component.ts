import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  public loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  public onForgotPassword = () => {
    console.log('Clicked Forgot Password');
    this.router.navigate(['/resetPassword']);
  }

  public onLogin = (loginFormValue) => {
    if (this.loginForm.valid) {
      this.model = {
        username: loginFormValue.username,
        password: loginFormValue.password
      };
      this.authService.login(this.model).subscribe(next => {
        this.snackBar.open('Logged in successfully', 'Close', { duration: 5000 });
        this.router.navigate(['/pages/dashboard']);
      }, error => {
        this.snackBar.open('Failed to login', 'Close', { duration: 5000 });
      });
    }
  }

  public openRegister = () => {
    console.log('Clicked Register');
    this.router.navigate(['/register']);
  }
}
