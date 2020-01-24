import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { GuestService } from 'src/app/core/guest.service';
import { Guest } from 'src/app/_models/guest';

@Injectable()
export class GuestEditResolver implements Resolve<Guest> {
  constructor(
    private guestService: GuestService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Guest> {
    return this.guestService.getGuest(route.params['id']).pipe(
      catchError(error => {
        this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
        this.router.navigate(['/pages/guests']);
        return of(null);
      })
    );
  }
}
