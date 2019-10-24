import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Booking } from 'src/app/_models/booking';
import { BookingService } from 'src/app/core/booking.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  booking: Booking;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private bookingService: BookingService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.booking = data['booking'];
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.bookingService.deleteBooking(this.booking.id).subscribe(
          () => {
            this.snackBar.open('Booking Deleted', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/bookings']);
          },
          error => {
            this.snackBar.open('Failed to delete Booking', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }
}
