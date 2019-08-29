import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
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

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const roles = next.firstChild.data['roles'] as Array<string>;
    if (roles) {
      const match = this.authService.roleMatch(roles);
      if (match) {
        return true;
      } else {
        this.router.navigate(['/pages/dashboard']);
        this.snackBar.open('You are not authorized to access this area', 'Close', { duration: 5000 });
      }
    }
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    this.snackBar.open('You are not authorized to access this page', 'Close', { duration: 5000 });
    return false;
  }
}
