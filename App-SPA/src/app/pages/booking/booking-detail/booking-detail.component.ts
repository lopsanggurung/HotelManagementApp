import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Booking } from 'src/app/_models/booking';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  booking: Booking;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.booking = data['booking'];
    });
  }
}
