import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { Guest } from './../../../_models/guest';
import { GuestService } from './../../../core/guest.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class GuestListResolver implements Resolve<Guest[]> {

    constructor(
        private guestService: GuestService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Guest[]> {
        return this.guestService.getGuests().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/guests']);
                return of(null);
            })
        );
    }
}
