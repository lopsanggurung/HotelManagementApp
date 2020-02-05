import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { UtilsService } from 'src/app/core/utils.service';
import { Booking } from 'src/app/_models/booking';
import { MenuItem } from 'src/app/_models/menuItem';
import { RestaurantOrder } from 'src/app/_models/restaurantOrder';
import { RestaurantOrderService } from 'src/app/core/restaurantOrder.service';

@Component({
  selector: 'app-restaurant-order-create',
  templateUrl: './restaurant-order-create.component.html',
  styleUrls: ['./restaurant-order-create.component.scss']
})
export class RestaurantOrderCreateComponent implements OnInit {
  bookings: Booking[];
  // bookingId: number;
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
    private snackBar: MatSnackBar,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.bookings = [{} as Booking];
      this.bookings.push(...data['bookings']);
      this.menuItems = data['menuItems'];
    });

    this.mainForm = this.fb.group({
      bookingId: new FormControl(''),
      orderFor: new FormControl(''),
      isCompleted: new FormControl('', [Validators.required]),
      isPaid: new FormControl('', [Validators.required]),
      restaurantOrderItems: this.fb.array([])
    }, { validator: this.utils.atLeastOne(Validators.required, ['bookingId', 'orderFor']) });

    this.calculateTotalAmount();
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

  create() {
    if (this.mainForm.valid) {
      this.restaurantOrder = Object.assign({}, this.mainForm.value);
      this.restaurantOrder.totalPriceBeforeTax = this.totalPriceBeforeTax;
      this.restaurantOrder.taxAmount = this.taxAmount;
      this.restaurantOrder.totalPrice = this.totalPrice;
      this.restaurantOrder.restaurantOrderItems.forEach((rsi, i) => {
        this.menuItems.forEach(mi => {
          // tslint:disable-next-line: triple-equals
          if (mi.id == rsi.menuItemId) {
            this.restaurantOrder.restaurantOrderItems[i]['pricePerItem'] = mi.price;
          }
        });
      });
      this.restaurantOrderService.createRestaurantOrder(this.restaurantOrder).subscribe((ro: RestaurantOrder) => {
        this.snackBar.open('New Restaurant Order Created', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/pages/restaurantOrders/' + ro.id]);
      },
        error => {
          this.snackBar.open('Failed to create Restaurant Order', 'Close', {
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

  addRestaurantOrderItem() {
    const restaurantOrderItem = this.fb.group({
      menuItemId: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });

    this.restaurantOrderItemForms.push(restaurantOrderItem);
  }

  deleteRestaurantOrderItem(i) {
    this.restaurantOrderItemForms.removeAt(i);
  }

  cancel() {
    this.router.navigate(['/pages/restaurantOrders']);
  }
}

