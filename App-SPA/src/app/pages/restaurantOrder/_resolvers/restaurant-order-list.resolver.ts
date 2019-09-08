import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { RestaurantOrder } from './../../../_models/restaurantOrder';
import { RestaurantOrderService } from './../../../core/restaurantOrder.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class RestaurantOrderListResolver implements Resolve<RestaurantOrder[]> {

    constructor(
        private restaurantOrderService: RestaurantOrderService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<RestaurantOrder[]> {
        return this.restaurantOrderService.getRestaurantOrders().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/restaurantOrders']);
                return of(null);
            })
        );
    }
}
