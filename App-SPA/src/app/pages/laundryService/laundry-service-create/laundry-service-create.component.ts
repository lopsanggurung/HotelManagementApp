import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { LaundryService } from 'src/app/_models/laundryService';
import { LaundryServiceService } from 'src/app/core/laundryService.service';

@Component({
  selector: 'app-laundry-service-create',
  templateUrl: './laundry-service-create.component.html',
  styleUrls: ['./laundry-service-create.component.scss']
})
export class LaundryServiceCreateComponent implements OnInit {
  bookingId: number;
  mainForm: FormGroup;
  laundryService: LaundryService;
  taxRate = 0.10; // Hardcoded as of now. ToDo: Generate from database.
  totalPriceBeforeTax = 0;
  taxAmount = 0;
  totalPrice = 0;

  typeList = [
    {
      'value': 'Type 1'
    },
    {
      'value': 'Type 2'
    },
    {
      'value': 'Type 3'
    }
  ];

  categoryList = [
    {
      'value': 'Category 1'
    },
    {
      'value': 'Category 2'
    },
    {
      'value': 'Category 3'
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
    private laundryServiceService: LaundryServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.bookingId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      isPaid: new FormControl('', [Validators.required]),
      laundryServiceItems: this.fb.array([])
    });

    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    (this.mainForm.get('laundryServiceItems') as FormArray).valueChanges.subscribe(fg => {
      if (fg !== undefined) {
        this.totalPriceBeforeTax = 0;
        fg.forEach((fc, i) => {
          if (isNaN(parseInt(fc.quantity, 10)) === false && isNaN(parseInt(fc.pricePerItem, 10)) === false) {
            this.totalPriceBeforeTax += fc.pricePerItem * parseInt(fc.quantity, 10);
          }
        });
        this.taxAmount = this.totalPriceBeforeTax * this.taxRate;
        this.totalPrice = this.totalPriceBeforeTax + this.totalPriceBeforeTax * this.taxRate;
      }
    });
  }

  create() {
    if (this.mainForm.valid) {
      this.laundryService = Object.assign({}, this.mainForm.value);
      this.laundryService.bookingId = this.bookingId;
      this.laundryService.totalPriceBeforeTax = this.totalPriceBeforeTax;
      this.laundryService.taxAmount = this.taxAmount;
      this.laundryService.totalPrice = this.totalPrice;
      this.laundryServiceService.createLaundryService(this.laundryService).subscribe(() => {
          this.snackBar.open('New Laundry Service Created', 'Close', {
            duration: 5000
          });
          this.router.navigate(['/pages/bookings/' + this.bookingId]);
        },
        error => {
          this.snackBar.open('Failed to create Laundry Service', 'Close', {
            duration: 5000
          });
        }
      );
      // console.log(this.laundryService);
    }
  }

  get laundryServiceItemForms() {
    return this.mainForm.get('laundryServiceItems') as FormArray;
  }

  addLaundryServiceItem() {
    const laundryServiceItem = this.fb.group({
      type: [],
      category: [],
      quantity: [],
      pricePerItem: []
    });

    this.laundryServiceItemForms.push(laundryServiceItem);
  }

  deleteLaundryServiceItem(i) {
    this.laundryServiceItemForms.removeAt(i);
  }

  cancel() {
    this.router.navigate(['/pages/bookings/' + this.bookingId]);
  }
}
