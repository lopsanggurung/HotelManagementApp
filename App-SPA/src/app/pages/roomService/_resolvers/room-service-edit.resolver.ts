import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { RoomServiceService } from 'src/app/core/roomService.service';
import { RoomService } from 'src/app/_models/roomService';

@Injectable()
export class RoomServiceEditResolver implements Resolve<RoomService> {
  constructor(
    private roomServiceService: RoomServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<RoomService> {
    return this.roomServiceService.getRoomService(route.params['id']).pipe(
      catchError(error => {
        this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
        this.router.navigate(['/pages/roomServices']);
        return of(null);
      })
    );
  }
}
