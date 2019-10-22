import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LaundryService } from 'src/app/_models/laundryService';

@Component({
  selector: 'app-laundry-service-detail',
  templateUrl: './laundry-service-detail.component.html',
  styleUrls: ['./laundry-service-detail.component.scss']
})
export class LaundryServiceDetailComponent implements OnInit {
  laundryService: LaundryService;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.laundryService = data['laundryService'];
      console.log(this.laundryService);
    });
  }
}
