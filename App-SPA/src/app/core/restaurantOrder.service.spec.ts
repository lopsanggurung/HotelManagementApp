/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestaurantOrderService } from './restaurantOrder.service';

describe('Service: RestaurantOrder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantOrderService]
    });
  });

  it('should ...', inject([RestaurantOrderService], (service: RestaurantOrderService) => {
    expect(service).toBeTruthy();
  }));
});
