import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { WakeUpCallService } from '../../../_models/wakeUpCallService';
import { WakeUpCallServiceService } from '../../../core/wakeUpCallService.service';


@Injectable()
export class WakeUpCallServiceDetailResolver implements Resolve<WakeUpCallService[]> {

    constructor(
        private wakeUpCallServiceService: WakeUpCallServiceService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<WakeUpCallService[]> {
        return this.wakeUpCallServiceService.getWakeUpCallService(route.params['id']).pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/wakeUpCallServices']);
                return of(null);
            })
        );
    }
}
