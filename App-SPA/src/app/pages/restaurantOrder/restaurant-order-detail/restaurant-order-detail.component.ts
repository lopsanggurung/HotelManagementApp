import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantOrder } from 'src/app/_models/restaurantOrder';

@Component({
  selector: 'app-restaurant-order-detail',
  templateUrl: './restaurant-order-detail.component.html',
  styleUrls: ['./restaurant-order-detail.component.scss']
})
export class RestaurantOrderDetailComponent implements OnInit {
  restaurantOrder: RestaurantOrder;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.restaurantOrder = data['restaurantOrder'];
      console.log(this.restaurantOrder);
    });
  }
}
