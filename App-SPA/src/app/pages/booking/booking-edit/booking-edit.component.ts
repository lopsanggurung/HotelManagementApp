import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Booking } from 'src/app/_models/booking';
import { BookingService } from 'src/app/core/booking.service';
import { Room } from 'src/app/_models/room';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {
  guestId: number;
  rooms: Room[];
  booking: Booking;
  bookingUpdateForm: FormGroup;

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
      this.booking = data['booking'];
      this.rooms = data['rooms'];
    });
    this.updateBookingForm();
  }

  updateBookingForm() {
    this.bookingUpdateForm = this.fb.group(
      {
        guestId: new FormControl(this.guestId, [
          Validators.required
        ]),
        roomId: new FormControl(this.booking.roomId.toString(), [
          Validators.required
        ]),
        bookingStatus: new FormControl(this.booking.bookingStatus, [
          Validators.required
        ]),
        checkInDate: new FormControl(this.booking.checkInDate, [
          Validators.required
        ]),
        checkOutDate: new FormControl(this.booking.checkOutDate, [
          Validators.required
        ]),
        numberOfAdults: new FormControl(this.booking.numberOfAdults, [
          Validators.required
        ]),
        numberOfChildren: new FormControl(this.booking.numberOfChildren, [
          Validators.required
        ]),
        additionalBed: new FormControl(this.booking.additionalBed.toString(), [
          Validators.required
        ]),
        requirePickUp: new FormControl(this.booking.requirePickUp.toString(), [
          Validators.required
        ]),
        pickUpDate: new FormControl(this.booking.pickUpDate, [
        ]),
        pickUpLocation: new FormControl(this.booking.pickUpLocation, [
        ]),
        pickUpDetails: new FormControl(this.booking.pickUpDetails, [
        ]),
        checkedInDate: new FormControl(this.booking.checkedInDate, [
          Validators.required
        ]),
        checkedOutDate: new FormControl(this.booking.checkedOutDate, [
          Validators.required
        ]),
        notes: new FormControl(this.booking.notes, [
        ]),
        feedBackOnCheckOut: new FormControl(this.booking.feedBackOnCheckOut, [
        ]),
        bookingSource: new FormControl(this.booking.bookingSource, [
          Validators.required
        ]),
        paymentStatus: new FormControl(this.booking.paymentStatus, [
          Validators.required
        ]),
        pricePerNight: new FormControl(this.booking.pricePerNight, [
          Validators.required
        ]),
        additionalBedPricePerNight: new FormControl(this.booking.additionalBedPricePerNight, [
          Validators.required
        ]),
        totalPriceBeforeTax: new FormControl(this.booking.totalPriceBeforeTax, [
          Validators.required
        ]),
        taxAmount: new FormControl(this.booking.taxAmount, [
          Validators.required
        ]),
        depositAmount: new FormControl(this.booking.depositAmount, [
          Validators.required
        ]),
        totalPrice: new FormControl(this.booking.totalPrice, [
          Validators.required
        ])
      }
    );
  }

  updateBooking(id) {
    if (this.bookingUpdateForm.valid) {
      this.booking = Object.assign({}, this.bookingUpdateForm.value);
      this.booking.additionalBed = JSON.parse(this.bookingUpdateForm.value.additionalBed);
      this.booking.requirePickUp = JSON.parse(this.bookingUpdateForm.value.requirePickUp);
      this.bookingService.updateBooking(id, this.booking).subscribe(
        () => {
          this.snackBar.open('Booking Updated', 'Close', { duration: 5000 });
          this.router.navigate(['/pages/bookings/' + id]);
        },
        error => {
          this.snackBar.open('Failed to update Booking', 'Close', { duration: 5000 });
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/pages/bookings/' + this.booking.id]);
  }

}
