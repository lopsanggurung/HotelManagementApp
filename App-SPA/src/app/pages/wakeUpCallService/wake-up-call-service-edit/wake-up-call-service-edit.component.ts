import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
declare var require: any;
const timeJsonData = require('../../../../assets/time.json');

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';
import { WakeUpCallServiceService } from '../../../core/wakeUpCallService.service';

@Component({
  selector: 'app-wake-up-call-service-edit',
  templateUrl: './wake-up-call-service-edit.component.html',
  styleUrls: ['./wake-up-call-service-edit.component.scss']
})
export class WakeUpCallServiceEditComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.wakeUpCallService = data['wakeUpCallService'];
    });

    const wakeUpCallDate = new Date(this.wakeUpCallService.wakeUpCallDate);
    const hour = wakeUpCallDate.getHours().toString();
    const twoDigitHour = this.addZeroBefore(hour);
    const minute = wakeUpCallDate.getMinutes().toString();
    const twoDigitMinute = this.addZeroBefore(minute);
    const callTime = twoDigitHour + ':' + twoDigitMinute;
    // console.log(callTime);

    this.mainForm = this.fb.group({
      isCompleted: new FormControl(this.wakeUpCallService.isCompleted.toString(), [Validators.required]),
      wakeUpCallDate: new FormControl(new Date(this.wakeUpCallService.wakeUpCallDate).toISOString(), [Validators.required]),
      wakeUpCallTime: new FormControl(callTime, [Validators.required])
    });

    this.bookingId = this.wakeUpCallService.bookingId;
  }

  addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
  }

  update(id) {
    if (this.mainForm.valid) {
      this.wakeUpCallService = Object.assign({}, this.mainForm.value);
      const newTime = this.wakeUpCallService['wakeUpCallTime'];
      const timeArr = newTime.split(':');
      this.wakeUpCallService['wakeUpCallDate'] = new Date(this.wakeUpCallService['wakeUpCallDate']);
      this.wakeUpCallService['wakeUpCallDate'].setUTCHours(parseInt(timeArr[0], 10), parseInt(timeArr[1], 10), 0);
      delete this.wakeUpCallService['wakeUpCallTime'];
      this.wakeUpCallService.bookingId = this.bookingId;
      this.wakeUpCallServiceService.updateWakeUpCallService(id, this.wakeUpCallService).subscribe(() => {
        this.snackBar.open('Call Service Updated', 'Close', {
          duration: 5000
        });
        this.router.navigate(['/pages/wakeUpCallServices/' + id]);
      },
        error => {
          this.snackBar.open('Failed to update Call Service', 'Close', {
            duration: 5000
          });
        }
      );
      // console.log(this.wakeUpCallService);
    }
  }

  cancel() {
    this.router.navigate(['/pages/wakeUpCallServices/' + this.wakeUpCallService.id]);
  }
}

