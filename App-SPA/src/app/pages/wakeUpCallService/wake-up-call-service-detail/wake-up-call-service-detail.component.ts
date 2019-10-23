import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';

@Component({
  selector: 'app-wake-up-call-service-detail',
  templateUrl: './wake-up-call-service-detail.component.html',
  styleUrls: ['./wake-up-call-service-detail.component.scss']
})
export class WakeUpCallServiceDetailComponent implements OnInit {
  wakeUpCallService: WakeUpCallService;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.wakeUpCallService = data['wakeUpCallService'];
      console.log(this.wakeUpCallService);
    });
  }
}
