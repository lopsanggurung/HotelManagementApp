import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DialogData } from '../user-management/user-management.component';
import { User } from '../../../_models/user';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.scss']
})
export class RolesModalComponent implements OnInit {
  user: User;
  roles: any[];

  constructor(
    public dialogRef: MatDialogRef<RolesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.roles = this.data.roles;
  }

  updateRoles() {
    this.dialogRef.close(this.roles);
  }
}
