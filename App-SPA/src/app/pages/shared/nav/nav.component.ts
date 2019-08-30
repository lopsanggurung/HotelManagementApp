import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/auth.service';
import { MatSnackBar } from '@angular/material';
import { SidenavService } from 'src/app/core/sidenav.service';
import { animateText, onSideNavChange, onMainContentChange } from 'src/app/animations/animations';

/** @title sidenav */
@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange],
})
export class NavComponent implements OnDestroy {
  public sideNavState = false;
  public linkText = false;
  public onSideNavChange: boolean;

  constructor(private router: Router, public authService: AuthService,
    private _sidenavService: SidenavService, private snackBar: MatSnackBar) {
      this._sidenavService.sideNavState$.subscribe( res => {
        console.log(res);
        this.onSideNavChange = res;
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.snackBar.open('Logged out', 'Close', { duration: 5000 });
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  ngOnDestroy(): void {
  }
}
