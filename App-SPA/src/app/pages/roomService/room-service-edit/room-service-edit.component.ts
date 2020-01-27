import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { RoomServiceService } from 'src/app/core/roomService.service';
import { RoomService } from 'src/app/_models/roomService';
import { MenuItem } from 'src/app/_models/menuItem';
import { RoomServiceItem } from 'src/app/_models/roomServiceItem';

@Component({
  selector: 'app-room-service-edit',
  templateUrl: './room-service-edit.component.html',
  styleUrls: ['./room-service-edit.component.scss']
})
export class RoomServiceEditComponent implements OnInit {
  bookingId: number;
  mainForm: FormGroup;
  roomServiceUpdateForm: FormGroup;
  roomService: RoomService;
  menuItems: MenuItem[];
  currentMenuItemPrice = 0;
  taxRate = 0.10; // Hardcoded as of now. ToDo: Generate from database.
  totalPriceBeforeTax = 0;
  taxAmount = 0;
  totalPrice = 0;

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
      this.roomService = data['roomService'];
    });

    this.mainForm = this.fb.group({
      isCompleted: new FormControl(this.roomService.isCompleted.toString(), [Validators.required]),
      isPaid: new FormControl(this.roomService.isPaid.toString(), [Validators.required]),
      roomServiceItems: this.fb.array([])
    });

    // Initialize roomServiceItems
    this.roomService.roomServiceItems.map(rsi => this.updateRoomServiceItem(rsi));

    this.calculateTotalAmount();

    // Initialize bill amounts
    this.totalPriceBeforeTax = this.roomService.totalPriceBeforeTax;
    this.taxAmount = this.roomService.taxAmount;
    this.totalPrice = this.roomService.totalPrice;
  }

  calculateTotalAmount() {
    (this.mainForm.get('roomServiceItems') as FormArray).valueChanges.subscribe(fg => {
      if (fg !== undefined) {
        this.totalPriceBeforeTax = 0;
        fg.forEach((fc, i) => {
          if (fc.menuItemId !== null && isNaN(parseInt(fc.quantity, 10)) === false) {
            this.menuItems.forEach(mi => {
              if (mi.id === parseInt(fc.menuItemId, 10)) {
                this.currentMenuItemPrice = mi.price;
              }
            });
            this.totalPriceBeforeTax += this.currentMenuItemPrice * parseInt(fc.quantity, 10);
          }
        });
        this.currentMenuItemPrice = 0;
        this.taxAmount = this.totalPriceBeforeTax * this.taxRate;
        this.totalPrice = this.totalPriceBeforeTax + this.totalPriceBeforeTax * this.taxRate;
      }
    });
  }

  update(id) {
    if (this.mainForm.valid) {
      this.roomService = Object.assign({}, this.mainForm.value);
      this.roomService.bookingId = this.bookingId;
      this.roomService.totalPriceBeforeTax = this.totalPriceBeforeTax;
      this.roomService.taxAmount = this.taxAmount;
      this.roomService.totalPrice = this.totalPrice;
      this.roomService.roomServiceItems.forEach((rsi, i) => {
        this.menuItems.forEach(mi => {
          // tslint:disable-next-line: triple-equals
          if (mi.id == rsi.menuItemId) {
            this.roomService.roomServiceItems[i]['pricePerItem'] = mi.price;
          }
        });
      });
      this.roomServiceService.updateRoomService(id, this.roomService).subscribe(() => {
        this.snackBar.open('Room Service Updated', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/pages/roomServices/' + id]);
      },
        error => {
          this.snackBar.open('Failed to Update Room Service', 'Close', {
            duration: 5000
          });
        }
      );
      // console.log(this.roomService);
    }
  }

  get roomServiceItemForms() {
    return this.mainForm.get('roomServiceItems') as FormArray;
  }

  // method used to initialize RoomServiceItem on initialization of component
  updateRoomServiceItem(rsi: RoomServiceItem) {
    const roomServiceItem = this.fb.group({
      menuItemId: [rsi.menuItemId.toString(), [Validators.required]],
      quantity: [rsi.quantity, [Validators.required]]
    });
    this.roomServiceItemForms.push(roomServiceItem);
  }

  addRoomServiceItem() {
    const roomServiceItem = this.fb.group({
      menuItemId: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });

    this.roomServiceItemForms.push(roomServiceItem);
  }

  deleteRoomServiceItem(i) {
    this.roomServiceItemForms.removeAt(i);
    this.mainForm.markAsDirty();
  }

  cancel() {
    this.router.navigate(['/pages/roomServices/' + this.roomService.id]);
  }
}

