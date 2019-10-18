import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
declare var require: any;
const timeJsonData = require('../../../../assets/time.json');

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';
import { WakeUpCallServiceService } from '../../../core/wakeUpCallService.service';

@Component({
  selector: 'app-wake-up-call-service-create',
  templateUrl: './wake-up-call-service-create.component.html',
  styleUrls: ['./wake-up-call-service-create.component.scss']
})
export class WakeUpCallServiceCreateComponent implements OnInit {
  bookingId: number;
  mainForm: FormGroup;
  wakeUpCallService: WakeUpCallService;

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

  timeIntervalList = timeJsonData;

  constructor(
    private wakeUpCallServiceService: WakeUpCallServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.bookingId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      isCompleted: new FormControl('', [Validators.required]),
      wakeUpCallDate: new FormControl('', [Validators.required]),
      wakeUpCallTime: new FormControl('', [Validators.required])
    });
  }

  create() {
    if (this.mainForm.valid) {
      this.wakeUpCallService = Object.assign({}, this.mainForm.value);
      const newTime = this.wakeUpCallService['wakeUpCallTime'];
      const timeArr = newTime.split(':');
      this.wakeUpCallService['wakeUpCallDate'].setUTCHours(parseInt(timeArr[0], 10), parseInt(timeArr[1], 10), 0);
      delete this.wakeUpCallService['wakeUpCallTime'];
      this.wakeUpCallService.bookingId = this.bookingId;
      this.wakeUpCallServiceService.createWakeUpCallService(this.wakeUpCallService).subscribe(() => {
          this.snackBar.open('New Call Service Created', 'Close', {
            duration: 5000
          });
          this.router.navigate(['/pages/bookings/' + this.bookingId]);
        },
        error => {
          this.snackBar.open('Failed to create Call Service', 'Close', {
            duration: 5000
          });
        }
      );
      console.log(this.wakeUpCallService);
    }
  }

  cancel() {
    this.router.navigate(['/pages/bookings/' + this.bookingId]);
  }
}
