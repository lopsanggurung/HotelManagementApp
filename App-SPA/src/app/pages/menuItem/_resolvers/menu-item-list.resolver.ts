import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


import { MenuItem } from './../../../_models/menuItem';
import { MenuItemService } from './../../../core/menuItem.service';
import { AuthService } from '../../../core/auth.service';


@Injectable()
export class MenuItemListResolver implements Resolve<MenuItem[]> {

    constructor(
        private menuItemService: MenuItemService,
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<MenuItem[]> {
        return this.menuItemService.getMenuItems().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/menuItems']);
                return of(null);
            })
        );
    }
}
