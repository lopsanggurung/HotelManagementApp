import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MenuItem } from './../_models/menuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.baseUrl + 'menuItems');
  }

  getMenuItem(id): Observable<MenuItem> {
    return this.http.get<MenuItem>(this.baseUrl + 'menuItems/' + id);
  }

  // updateMenuItem(id: number, menuItem: MenuItem) {
  //   return this.http.put(this.baseUrl + 'menuItems/' + id, menuItem);
  // }
}
