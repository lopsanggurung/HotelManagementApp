import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { BookingService } from 'src/app/core/booking.service';
import { Booking } from 'src/app/_models/booking';

@Injectable()
export class BookingEditResolver implements Resolve<Booking> {
  constructor(
    private bookingService: BookingService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Booking> {
    return this.bookingService.getBooking(route.params['id']).pipe(
      catchError(error => {
        this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
        this.router.navigate(['/pages/bookings']);
        return of(null);
      })
    );
  }
}
