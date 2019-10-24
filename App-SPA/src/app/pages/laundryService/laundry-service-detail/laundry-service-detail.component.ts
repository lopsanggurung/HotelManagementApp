import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { LaundryService } from 'src/app/_models/laundryService';
import { LaundryServiceService } from 'src/app/core/laundryService.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-laundry-service-detail',
  templateUrl: './laundry-service-detail.component.html',
  styleUrls: ['./laundry-service-detail.component.scss']
})
export class LaundryServiceDetailComponent implements OnInit {
  laundryService: LaundryService;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private laundryServiceService: LaundryServiceService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.laundryService = data['laundryService'];
      console.log(this.laundryService);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.laundryServiceService.deleteLaundryService(this.laundryService.id).subscribe(
          () => {
            this.snackBar.open('Laundry Service Deleted', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/bookings/', this.laundryService.bookingId]);
          },
          error => {
            this.snackBar.open('Failed to delete Laundry Service', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }
}
