import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { Room } from './../../../_models/room';
import { RoomService } from './../../../core/room.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class RoomListResolver implements Resolve<Room[]> {

    constructor(
        private roomService: RoomService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Room[]> {
        return this.roomService.getRooms().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/rooms']);
                return of(null);
            })
        );
    }
}
