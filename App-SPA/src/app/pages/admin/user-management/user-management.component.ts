import { Component, OnInit } from '@angular/core';

import { AdminService } from './../../../core/admin.service';
import { User } from './../../../_models/user';
import { MatDialog } from '@angular/material';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users: User[];
  // currentUser: User;

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog
  ) { }

  editUserDetail(user: User): void {
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      width: '450px',
      data: { user }
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.currentUser = result;
      // console.log(result);
    });
  }

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      error => {
        console.log(error);
      }
    );
  }

  // editUserDetail() {
  // }

  // editRolesModal(user: User) {
  // const initialState = {
  //   user,
  //   roles: this.getRolesArray(user)
  // };
  // this.bsModalRef = this.modalService.show(RolesModalComponent, {
  //   initialState
  // });
  // this.bsModalRef.content.updateSelectedRoles.subscribe(values => {
  //   const rolesToUpdate = {
  //     roleNames: [
  //       ...values.filter(el => el.checked === true).map(el => el.name)
  //     ]
  //   };
  //   if (rolesToUpdate) {
  //     this.adminService.updateUserRoles(user, rolesToUpdate).subscribe(
  //       () => {
  //         user.roles = [...rolesToUpdate.roleNames];
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // });
  // }

  private getRolesArray(user) {
    const roles = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      { name: 'Admin', value: 'Admin' },
      { name: 'Moderator', value: 'Moderator' },
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
