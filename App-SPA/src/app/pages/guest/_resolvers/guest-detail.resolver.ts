import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GuestService } from 'src/app/core/guest.service';
import { Guest } from 'src/app/_models/guest';

@Injectable()
export class GuestDetailResolver implements Resolve<Guest> {
  constructor(
    private guestService: GuestService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Guest> {
    return this.guestService.getGuest(route.params['id']).pipe(
      catchError(error => {
        this.router.navigate(['/pages/guests']);
        return of(null);
      })
    );
  }
}
