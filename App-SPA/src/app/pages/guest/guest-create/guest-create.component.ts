import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
declare var require: any;
const countryJsonData = require('../../../../assets/country.json');

import { GuestService } from 'src/app/core/guest.service';
import { Guest } from 'src/app/_models/guest';

@Component({
  selector: 'app-guest-create',
  templateUrl: './guest-create.component.html',
  styleUrls: ['./guest-create.component.scss']
})
export class GuestCreateComponent implements OnInit {
  guest: Guest;
  guestCreateForm: FormGroup;

  countryList = countryJsonData;

  constructor(
    private guestService: GuestService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createGuestForm();
  }

  createGuestForm() {
    this.guestCreateForm = this.fb.group(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        middleName: new FormControl('', [
          Validators.maxLength(50)
        ]),
        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        phoneNumber: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        email: new FormControl('', [
          Validators.email,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        nationality: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        streetAddress: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        city: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        state: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        zipCode: new FormControl('', [
          Validators.minLength(1),
          Validators.maxLength(50)
        ]),
        country: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)
        ])
      }
    );
  }

  create() {
    if (this.guestCreateForm.valid) {
      this.guest = Object.assign({}, this.guestCreateForm.value);
      this.guestService.createGuest(this.guest).subscribe(
        () => {
          this.snackBar.open('New Guest Created', 'Close', { duration: 5000 });
          this.router.navigate(['/pages/guests']);
        },
        error => {
          this.snackBar.open('Failed to create Guest', 'Close', { duration: 5000 });
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/pages/guests']);
  }
}
