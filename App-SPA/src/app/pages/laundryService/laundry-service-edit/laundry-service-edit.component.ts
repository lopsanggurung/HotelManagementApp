import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { LaundryService } from 'src/app/_models/laundryService';
import { LaundryServiceService } from 'src/app/core/laundryService.service';
import { LaundryServiceItem } from 'src/app/_models/laundryServiceItem';

@Component({
  selector: 'app-laundry-service-edit',
  templateUrl: './laundry-service-edit.component.html',
  styleUrls: ['./laundry-service-edit.component.scss']
})
export class LaundryServiceEditComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.laundryService = data['laundryService'];
    });

    this.mainForm = this.fb.group({
      dateOrdered: new FormControl(this.laundryService.dateOrdered, [Validators.required]),
      dateReturnedFromLaundry: new FormControl(this.laundryService.dateReturnedFromLaundry, [Validators.required]),
      dateReturnedToGuest: new FormControl(this.laundryService.dateReturnedToGuest, [Validators.required]),
      isPaid: new FormControl(this.laundryService.isPaid.toString(), [Validators.required]),
      laundryServiceItems: this.fb.array([])
    });

    // Initialize laundryServiceItems
    this.laundryService.laundryServiceItems.map(lsi => this.updateLaundryServiceItem(lsi));

    this.calculateTotalAmount();

    // Initialize bill amounts
    this.totalPriceBeforeTax = this.laundryService.totalPriceBeforeTax;
    this.taxAmount = this.laundryService.taxAmount;
    this.totalPrice = this.laundryService.totalPrice;

    this.bookingId = this.laundryService.bookingId;
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

  update(id) {
    if (this.mainForm.valid) {
      this.laundryService = Object.assign({}, this.mainForm.value);
      this.laundryService.bookingId = this.bookingId;
      this.laundryService.totalPriceBeforeTax = this.totalPriceBeforeTax;
      this.laundryService.taxAmount = this.taxAmount;
      this.laundryService.totalPrice = this.totalPrice;
      this.laundryServiceService.updateLaundryService(id, this.laundryService).subscribe(() => {
        this.snackBar.open('Laundry Service Updated', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/pages/laundryServices/' + id]);
      },
        error => {
          this.snackBar.open('Failed to update Laundry Service', 'Close', {
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

  // method used to initialize LaundryServiceItem on initialization of component
  updateLaundryServiceItem(lsi: LaundryServiceItem) {
    const laundryServiceItem = this.fb.group({
      type: [lsi.type.toString(), [Validators.required]],
      category: [lsi.category.toString(), [Validators.required]],
      quantity: [lsi.quantity, [Validators.required]],
      pricePerItem: [lsi.pricePerItem, [Validators.required]]
    });
    this.laundryServiceItemForms.push(laundryServiceItem);
  }

  addLaundryServiceItem() {
    const laundryServiceItem = this.fb.group({
      type: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      pricePerItem: ['', [Validators.required]]
    });

    this.laundryServiceItemForms.push(laundryServiceItem);
  }

  deleteLaundryServiceItem(i) {
    this.laundryServiceItemForms.removeAt(i);
    this.mainForm.markAsDirty();
  }

  cancel() {
    this.router.navigate(['/pages/laundryServices/' + this.laundryService.id]);
  }
}

