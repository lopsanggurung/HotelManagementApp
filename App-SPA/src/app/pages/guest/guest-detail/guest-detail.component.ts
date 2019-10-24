import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { Guest } from 'src/app/_models/guest';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { GuestService } from 'src/app/core/guest.service';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.scss']
})
export class GuestDetailComponent implements OnInit {
  guest: Guest;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private guestService: GuestService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.guest = data['guest'];
      console.log(this.guest);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.guestService.deleteGuest(this.guest.id).subscribe(
          () => {
            this.snackBar.open('Guest Deleted', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/guests']);
          },
          error => {
            this.snackBar.open('Failed to delete Guest', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }

}
