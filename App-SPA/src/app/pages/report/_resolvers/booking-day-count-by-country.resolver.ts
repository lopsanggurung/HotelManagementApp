import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { Booking } from 'src/app/_models/booking';
import { ReportService } from '../../../core/report.service';


@Injectable()
export class BookingDayCountByCountryResolver implements Resolve<Booking[]> {

    constructor(
        private reportService: ReportService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Booking[]> {
        return this.reportService.getBookingDayCountByCountry().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/dashboard']);
                return of(null);
            })
        );
    }
}
