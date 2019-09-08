import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RestaurantOrder } from './../_models/restaurantOrder';

@Injectable({
  providedIn: 'root'
})
export class RestaurantOrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRestaurantOrders(): Observable<RestaurantOrder[]> {
    return this.http.get<RestaurantOrder[]>(this.baseUrl + 'restaurantOrders');
  }

  getRestaurantOrder(id): Observable<RestaurantOrder> {
    return this.http.get<RestaurantOrder>(this.baseUrl + 'restaurantOrders/' + id);
  }

  // updateRestaurantOrder(id: number, restaurantOrder: RestaurantOrder) {
  //   return this.http.put(this.baseUrl + 'restaurantOrders/' + id, restaurantOrder);
  // }
}
