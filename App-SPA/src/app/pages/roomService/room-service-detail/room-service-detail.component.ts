import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { RoomService } from 'src/app/_models/roomService';
import { RoomServiceService } from 'src/app/core/roomService.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-room-service-detail',
  templateUrl: './room-service-detail.component.html',
  styleUrls: ['./room-service-detail.component.scss']
})
export class RoomServiceDetailComponent implements OnInit {
  roomService: RoomService;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private roomServiceService: RoomServiceService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roomService = data['roomService'];
      console.log(this.roomService);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.roomServiceService.deleteRoomService(this.roomService.id).subscribe(
          () => {
            this.snackBar.open('Room Service Deleted', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/bookings/', this.roomService.bookingId]);
          },
          error => {
            this.snackBar.open('Failed to delete Room Service', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }
}
