import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  public registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    console.log('Clicked Cancel');
    this.router.navigate(['/login']
    );
  }

  public onRegister = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.model = {
        username: registerFormValue.username,
        password: registerFormValue.password
      };
      // console.log(this.model);
      this.authService.register(this.model).subscribe(
        () => {
          this.snackBar.open('Registered successfully', 'Close', { duration: 5000 });
        },
        error => {
          // console.log(error);
          this.snackBar.open('Failed to register', 'Close', { duration: 5000 });
        }, () => {
          this.authService.login(this.model).subscribe(() => {
            this.router.navigate(['/pages']);
          });
          // this.router.navigate(['/pages']);
        }
      );
    }
  }

}
