import { Component, OnInit, Inject, ViewChild, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { User } from 'src/app/_models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { AuthService } from 'src/app/core/auth.service';
import { NgForm, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss']
})
export class UserEditModalComponent implements OnInit {
  model: any = {};
  public editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private route: ActivatedRoute, private router: Router,
    private snackBar: MatSnackBar, private userService: UserService, private authService: AuthService, ) {
    this.model = this.data.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      username: new FormControl(this.model.userName, [Validators.required]),
      firstName: new FormControl(this.model.firstName, [Validators.required]),
      lastName: new FormControl(this.model.lastName, [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.editForm.controls[controlName].hasError(errorName);
  }

  public onForgotPassword = () => {
    console.log('Clicked Forgot Password');
    this.router.navigate(['/resetPassword']);
  }

  public onEdit = (editFormValue) => {
    if (this.editForm.valid) {
      this.model = {
        username: editFormValue.username,
        firstName: editFormValue.firstName,
        lastName: editFormValue.lastName
      };
      // console.log(this.model);
    }
  }
}
