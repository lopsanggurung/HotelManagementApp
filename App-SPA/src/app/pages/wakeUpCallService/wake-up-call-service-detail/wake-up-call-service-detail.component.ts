import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';
import { WakeUpCallServiceService } from 'src/app/core/wakeUpCallService.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-wake-up-call-service-detail',
  templateUrl: './wake-up-call-service-detail.component.html',
  styleUrls: ['./wake-up-call-service-detail.component.scss']
})
export class WakeUpCallServiceDetailComponent implements OnInit {
  wakeUpCallService: WakeUpCallService;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private wakeUpCallServiceService: WakeUpCallServiceService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.wakeUpCallService = data['wakeUpCallService'];
      console.log(this.wakeUpCallService);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.wakeUpCallServiceService.deleteWakeUpCallService(this.wakeUpCallService.id).subscribe(
          () => {
            this.snackBar.open('Wake Up Call Service Deleted', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/bookings/', this.wakeUpCallService.bookingId]);
          },
          error => {
            this.snackBar.open('Failed to delete Wake Up Call Service', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }
}
