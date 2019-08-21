import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

import { User } from './../../../_models/user';
import { UserService } from './../../../core/user.service';


@Injectable()
export class UserListResolver implements Resolve<User[]> {

    constructor(
        private userService: UserService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers().pipe(
            catchError(error => {
                this.snackBar.open('Problem retreiving data', 'Close', { duration: 5000 });
                this.router.navigate(['/../pages/users']);
                return of(null);
            })
        );
    }
}
