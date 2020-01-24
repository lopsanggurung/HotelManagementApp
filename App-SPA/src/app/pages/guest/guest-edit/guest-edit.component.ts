import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

import { Guest } from 'src/app/_models/guest';
import { GuestService } from 'src/app/core/guest.service';

@Component({
  selector: 'app-guest-edit',
  templateUrl: './guest-edit.component.html',
  styleUrls: ['./guest-edit.component.scss']
})
export class GuestEditComponent implements OnInit {
  guest: Guest;
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar,
    private guestService: GuestService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.guest = data['guest'];
    });
  }

  updateGuest(id) {
    this.guestService.updateGuest(id, this.guest).subscribe(next => {
      this.snackBar.open('Guest profile updated successfully', 'Close', { duration: 5000 });
      this.editForm.reset(this.guest);
    }, error => {
      this.snackBar.open('Failed to update Guest', 'Close', { duration: 5000 });
    });
  }
}
