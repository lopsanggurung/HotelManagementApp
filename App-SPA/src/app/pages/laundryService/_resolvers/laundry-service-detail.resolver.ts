import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { LaundryService } from './../../../_models/laundryService';
import { LaundryServiceService } from './../../../core/laundryService.service';

@Injectable()
export class LaundryServiceDetailResolver implements Resolve<LaundryService[]> {

    constructor(
        private laundryServiceService: LaundryServiceService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<LaundryService[]> {
        return this.laundryServiceService.getLaundryService(route.params['id']).pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/laundryServices']);
                return of(null);
            })
        );
    }
}
