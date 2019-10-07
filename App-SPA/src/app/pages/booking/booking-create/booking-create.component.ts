import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { BookingService } from 'src/app/core/booking.service';
import { Booking } from 'src/app/_models/booking';
import { Room } from 'src/app/_models/room';

@Component({
  selector: 'app-booking-create',
  templateUrl: './booking-create.component.html',
  styleUrls: ['./booking-create.component.scss']
})
export class BookingCreateComponent implements OnInit {
  guestId: number;
  rooms: Room[];
  booking: Booking;
  bookingCreateForm: FormGroup;

  bookingStatusList = [
    {
      'name': 'Booked'
    },
    {
      'name': 'Checked In'
    },
    {
      'name': 'Checked Out'
    }
  ];

  paymentStatusList = [
    {
      'name': 'Not Paid'
    },
    {
      'name': 'Partially Paid'
    },
    {
      'name': 'Paid'
    }
  ];

  requirePickUpList = [
    {
      'display': 'Yes',
      'value': true,
    },
    {
      'display': 'No',
      'value': false,
    },
  ];

  additionalBedList = [
    {
      'display': 'Yes',
      'value': true,
    },
    {
      'display': 'No',
      'value': false,
    },
  ];

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.guestId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.rooms = data['rooms'];
    });
    this.createBookingForm();
    // this.bookingCreateForm.get('guestId').disable({onlySelf: true});
  }

  createBookingForm() {
    this.bookingCreateForm = this.fb.group(
      {
        guestId: new FormControl(this.guestId, [
          Validators.required
        ]),
        roomId: new FormControl('', [
          Validators.required
        ]),
        bookingStatus: new FormControl('', [
          Validators.required
        ]),
        checkInDate: new FormControl('', [
          Validators.required
        ]),
        checkOutDate: new FormControl('', [
          Validators.required
        ]),
        numberOfAdults: new FormControl('', [
          Validators.required
        ]),
        numberOfChildren: new FormControl('', [
          Validators.required
        ]),
        additionalBed: new FormControl('', [
          Validators.required
        ]),
        requirePickUp: new FormControl('', [
          Validators.required
        ]),
        bookingSource: new FormControl('', [
          Validators.required
        ]),
        paymentStatus: new FormControl('', [
          Validators.required
        ]),
        pricePerNight: new FormControl('', [
          Validators.required
        ]),
        totalPriceBeforeTax: new FormControl('', [
          Validators.required
        ]),
        taxAmount: new FormControl('', [
          Validators.required
        ]),
        depositAmount: new FormControl('', [
          Validators.required
        ]),
        totalPrice: new FormControl('', [
          Validators.required
        ])
      }
    );
  }

  create() {
    if (this.bookingCreateForm.valid) {
      this.booking = Object.assign({}, this.bookingCreateForm.value);
      this.booking.additionalBed = JSON.parse(this.bookingCreateForm.value.additionalBed);
      this.booking.requirePickUp = JSON.parse(this.bookingCreateForm.value.requirePickUp);
      this.bookingService.createBooking(this.booking).subscribe(
        () => {
          this.snackBar.open('New Booking Created', 'Close', { duration: 5000 });
          this.router.navigate(['/pages/guests/' + this.guestId]);
        },
        error => {
          this.snackBar.open('Failed to create Booking', 'Close', { duration: 5000 });
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/pages/guests/' + this.guestId]);
  }
}
