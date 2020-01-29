import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { MenuItem } from 'src/app/_models/menuItem';
import { RestaurantOrder } from 'src/app/_models/restaurantOrder';
import { RestaurantOrderService } from 'src/app/core/restaurantOrder.service';
import { RestaurantOrderItem } from 'src/app/_models/restaurantOrderItem';

@Component({
  selector: 'app-restaurant-order-edit',
  templateUrl: './restaurant-order-edit.component.html',
  styleUrls: ['./restaurant-order-edit.component.scss']
})
export class RestaurantOrderEditComponent implements OnInit {
  bookingId: number;
  mainForm: FormGroup;
  restaurantOrder: RestaurantOrder;
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
    private restaurantOrderService: RestaurantOrderService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.menuItems = data['menuItems'];
      this.restaurantOrder = data['restaurantOrder'];
    });

    this.mainForm = this.fb.group({
      isCompleted: new FormControl(this.restaurantOrder.isCompleted.toString(), [Validators.required]),
      isPaid: new FormControl(this.restaurantOrder.isPaid.toString(), [Validators.required]),
      restaurantOrderItems: this.fb.array([])
    });

    // Initialize RestaurantOrderItems
    this.restaurantOrder.restaurantOrderItems.map(roi => this.updateRestaurantOrderItem(roi));

    this.calculateTotalAmount();

    // Initialize bill amounts
    this.totalPriceBeforeTax = this.restaurantOrder.totalPriceBeforeTax;
    this.taxAmount = this.restaurantOrder.taxAmount;
    this.totalPrice = this.restaurantOrder.totalPrice;

    this.bookingId = this.restaurantOrder.bookingId;
  }

  calculateTotalAmount() {
    (this.mainForm.get('restaurantOrderItems') as FormArray).valueChanges.subscribe(fg => {
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
      this.restaurantOrder = Object.assign({}, this.mainForm.value);
      this.restaurantOrder.bookingId = this.bookingId;
      this.restaurantOrder.totalPriceBeforeTax = this.totalPriceBeforeTax;
      this.restaurantOrder.taxAmount = this.taxAmount;
      this.restaurantOrder.totalPrice = this.totalPrice;
      this.restaurantOrder.restaurantOrderItems.forEach((roi, i) => {
        this.menuItems.forEach(mi => {
          // tslint:disable-next-line: triple-equals
          if (mi.id == roi.menuItemId) {
            this.restaurantOrder.restaurantOrderItems[i]['pricePerItem'] = mi.price;
          }
        });
      });
      this.restaurantOrderService.updateRestaurantOrder(id, this.restaurantOrder).subscribe(() => {
        this.snackBar.open('Restaurant Order Updated', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/pages/restaurantOrders/' + id]);
      },
        error => {
          this.snackBar.open('Failed to Update Restaurant Order', 'Close', {
            duration: 5000
          });
        }
      );
      // console.log(this.restaurantOrder);
    }
  }

  get restaurantOrderItemForms() {
    return this.mainForm.get('restaurantOrderItems') as FormArray;
  }

  // method used to initialize RestaurantOrderItem on initialization of component
  updateRestaurantOrderItem(roi: RestaurantOrderItem) {
    const restaurantOrderItem = this.fb.group({
      menuItemId: [roi.menuItemId.toString(), [Validators.required]],
      quantity: [roi.quantity, [Validators.required]]
    });
    this.restaurantOrderItemForms.push(restaurantOrderItem);
  }

  addRestaurantOrderItem() {
    const restaurantOrderItem = this.fb.group({
      menuItemId: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });

    this.restaurantOrderItemForms.push(restaurantOrderItem);
  }

  deleteRestaurantOrderItem(i) {
    this.restaurantOrderItemForms.removeAt(i);
    this.mainForm.markAsDirty();
  }

  cancel() {
    this.router.navigate(['/pages/restaurantOrders/' + this.restaurantOrder.id]);
  }
}

