import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, ErrorStateMatcher } from '@angular/material';

import { AuthService } from '../auth.service';
import { User } from 'src/app/_models/user';


class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.dirty);
    const invalidParent = !!(control && control.touched && control.parent
      && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  matcher = new MyErrorStateMatcher();
  public registerForm: FormGroup;

  constructor(private router: Router, private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.router.navigate(['/login']
    );
  }

  public onRegister = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      // console.log(this.model);
      this.authService.register(this.user).subscribe(
        () => {
          this.snackBar.open('Registered successfully', 'Close', { duration: 5000 });
        },
        error => {
          // console.log(error);
          this.snackBar.open('Failed to register', 'Close', { duration: 5000 });
        }, () => {
          this.authService.login(this.user).subscribe(() => {
            this.router.navigate(['/pages']);
          });
          // this.router.navigate(['/pages']);
        }
      );
    }
  }
}

