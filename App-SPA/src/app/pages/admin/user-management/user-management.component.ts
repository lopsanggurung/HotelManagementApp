import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { AdminService } from './../../../core/admin.service';
import { User } from './../../../_models/user';
import { RolesModalComponent } from '../roles-modal/roles-modal.component';

export interface DialogData {
  user: User;
  roles: any[];
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['id', 'userName', 'roles', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.getUsersWithRoles();
  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.users);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(RolesModalComponent, {
      width: '450px',
      data: {
        user, roles: this.getRolesArray(user)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const rolesToUpdate = {
          roleNames: [...result.filter(el => el.checked === true).map(el => el.name)]
        };
        if (rolesToUpdate) {
          this.adminService.updateUserRoles(user, rolesToUpdate).subscribe(() => {
            user.roles = [...rolesToUpdate.roleNames];
            this.snackBar.open('Roles changed successfully', 'Close', { duration: 5000 });
          }, error => {
            console.log(error);
            this.snackBar.open('Failed to change Roles', 'Close', { duration: 5000 });
          });
        }
      }
    });
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe(
      (users: User[]) => {
        this.users = users;
        // this.dataSource = this.users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }

  private getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      { name: 'Admin', value: 'Admin' },
      { name: 'Manager', value: 'Manager' },
      { name: 'Member', value: 'Member' },
      { name: 'VIP', value: 'VIP' }
    ];

    for (let i = 0; i < availableRoles.length; i++) {
      let isMatch = false;
      for (let j = 0; j < userRoles.length; j++) {
        if (availableRoles[i].name === userRoles[j]) {
          isMatch = true;
          availableRoles[i].checked = true;
          roles.push(availableRoles[i]);
          break;
        }
      }
      if (!isMatch) {
        availableRoles[i].checked = false;
        roles.push(availableRoles[i]);
      }
    }
    return roles;
  }
}
