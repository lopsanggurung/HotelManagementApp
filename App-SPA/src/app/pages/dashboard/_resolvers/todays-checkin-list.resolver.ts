import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../../core/auth.service';
import { Booking } from 'src/app/_models/booking';
import { BookingService } from 'src/app/core/booking.service';


@Injectable()
export class TodaysCheckinListResolver implements Resolve<Booking[]> {

    constructor(
        private bookingService: BookingService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Booking[]> {
        return this.bookingService.getTodaysCheckIns().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/dashboard']);
                return of(null);
            })
        );
    }
}
