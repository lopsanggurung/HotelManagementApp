import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    this.snackBar.open('You are not authorized to access this page', 'Close', { duration: 5000 });
    return false;
  }
}
