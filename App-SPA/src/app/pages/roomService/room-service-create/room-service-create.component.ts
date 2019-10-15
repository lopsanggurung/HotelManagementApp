import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { RoomServiceService } from 'src/app/core/roomService.service';
import { RoomService } from 'src/app/_models/roomService';
import { MenuItem } from 'src/app/_models/menuItem';

@Component({
  selector: 'app-room-service-create',
  templateUrl: './room-service-create.component.html',
  styleUrls: ['./room-service-create.component.scss']
})
export class RoomServiceCreateComponent implements OnInit {
  bookingId: number;
  roomService: RoomService;
  roomServiceCreateForm: FormGroup;
  menuItems: MenuItem;
  mainForm: FormGroup;

  isCompletedList = [
    {
      'name': 'Yes',
      'value': true
    },
    {
      'name': 'No',
      'value': false
    }
  ];

  isPaidList = [
    {
      'name': 'Paid',
      'value': true
    },
    {
      'name': 'Unpaid',
      'value': false
    }
  ];

  constructor(
    private roomServiceService: RoomServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.bookingId = +this.route.snapshot.paramMap.get('id');
  }

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.menuItems = data['menuItems'];
      });

      this.mainForm = this.fb.group({
        bookingId: new FormControl(this.bookingId, [
          Validators.required
        ]),
        isCompleted: new FormControl('', [
          Validators.required
        ]),
        isPaid: new FormControl('', [
          Validators.required
        ]),
        totalPriceBeforeTax: new FormControl('', [
          Validators.required
        ]),
        taxAmount: new FormControl('', [
          Validators.required
        ]),
        totalPrice: new FormControl('', [
          Validators.required
        ]),
        roomServiceItems: this.fb.array([])
      });
    }

    create() {
      if (this.mainForm.valid) {
        this.roomService = Object.assign({}, this.mainForm.value);
        // this.roomService.isCompleted = JSON.parse(this.mainForm.value.isCompleted);
        this.roomServiceService.createRoomService(this.roomService).subscribe(
          () => {
            this.snackBar.open('New Room Service Created', 'Close', { duration: 5000 });
            this.router.navigate(['/pages/bookings/' + this.bookingId]);
          },
          error => {
            this.snackBar.open('Failed to create Room Service', 'Close', { duration: 5000 });
          }
        );
        console.log(this.roomService);
      }
    }

    get roomServiceItemForms() {
    return this.mainForm.get('roomServiceItems') as FormArray;
  }

  addRoomServiceItem() {
    const roomServiceItem = this.fb.group({
      menuItemId: [],
      quantity: [],
      pricePerItem: [],
    });

    this.roomServiceItemForms.push(roomServiceItem);
  }

  deleteRoomServiceItem(i) {
    this.roomServiceItemForms.removeAt(i);
  }

  cancel() {
    this.router.navigate(['/pages/bookings/' + this.bookingId]);
  }
}
