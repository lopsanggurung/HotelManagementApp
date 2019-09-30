import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Guest } from '../_models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getGuests(): Observable<Guest[]> {
    return this.http.get<Guest[]>(this.baseUrl + 'guests');
  }

  getGuest(id): Observable<Guest> {
    return this.http.get<Guest>(this.baseUrl + 'guests/' + id);
  }

  createGuest(guest: Guest) {
    return this.http.post(this.baseUrl + 'guests/', guest);
  }

  // updateGuest(id: number, guest: Guest) {
  //   return this.http.put(this.baseUrl + 'guests/' + id, guest);
  // }
}
