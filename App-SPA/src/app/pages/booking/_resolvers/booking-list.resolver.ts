import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { Booking } from './../../../_models/booking';
import { BookingService } from './../../../core/booking.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class BookingListResolver implements Resolve<Booking[]> {

    constructor(
        private bookingService: BookingService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Booking[]> {
        return this.bookingService.getBookings().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/bookings']);
                return of(null);
            })
        );
    }
}
