import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../../core/auth.service';
import { Booking } from 'src/app/_models/booking';
import { BookingService } from 'src/app/core/booking.service';
import { ReportService } from './../../../core/report.service';


@Injectable()
export class BookingCountByMonthResolver implements Resolve<Booking[]> {

    constructor(
        private reportService: ReportService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Booking[]> {
        return this.reportService.getBookingCountByMonth().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/dashboard']);
                return of(null);
            })
        );
    }
}
