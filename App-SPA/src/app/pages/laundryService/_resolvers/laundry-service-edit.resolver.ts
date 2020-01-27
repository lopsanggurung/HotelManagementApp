import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { LaundryServiceService } from 'src/app/core/laundryService.service';
import { LaundryService } from 'src/app/_models/laundryService';

@Injectable()
export class LaundryServiceEditResolver implements Resolve<LaundryService> {
  constructor(
    private laundryServiceService: LaundryServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<LaundryService> {
    return this.laundryServiceService.getLaundryService(route.params['id']).pipe(
      catchError(error => {
        this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
        this.router.navigate(['/pages/laundryServices']);
        return of(null);
      })
    );
  }
}
