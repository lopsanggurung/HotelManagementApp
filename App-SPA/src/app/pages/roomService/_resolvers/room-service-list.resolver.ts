import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { RoomService } from '../../../_models/roomService';
import { RoomServiceService } from './../../../core/roomService.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class RoomServiceListResolver implements Resolve<RoomService[]> {

    constructor(
        private roomServiceService: RoomServiceService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<RoomService[]> {
        return this.roomServiceService.getRoomServices().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/roomServices']);
                return of(null);
            })
        );
    }
}
