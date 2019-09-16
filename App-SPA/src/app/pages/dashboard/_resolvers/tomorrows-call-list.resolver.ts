import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../../core/auth.service';
import { WakeUpCallServiceService } from 'src/app/core/wakeUpCallService.service';
import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';


@Injectable()
export class TomorrowsCallListResolver implements Resolve<WakeUpCallService[]> {

    constructor(
        private wakeUpCallServiceService: WakeUpCallServiceService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<WakeUpCallService[]> {
        return this.wakeUpCallServiceService.getTomorrowsCalls().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/dashboard']);
                return of(null);
            })
        );
    }
}
