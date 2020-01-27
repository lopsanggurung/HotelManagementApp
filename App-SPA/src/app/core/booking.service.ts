import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Booking } from '../_models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + 'bookings');
  }

  getBooking(id): Observable<Booking> {
    return this.http.get<Booking>(this.baseUrl + 'bookings/' + id);
  }

  createBooking(booking: Booking) {
    return this.http.post(this.baseUrl + 'bookings/', booking);
  }

  deleteBooking(id): Observable<Booking> {
    return this.http.delete<Booking>(this.baseUrl + 'bookings/' + id);
  }

  getTodaysCheckIns(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + 'bookings/getTodaysCheckIns');
  }

  getTodaysCheckOuts(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + 'bookings/getTodaysCheckOuts');
  }

  getTodaysPendingCheckIns(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + 'bookings/getTodaysPendingCheckIns');
  }

  getTodaysPendingCheckOuts(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl + 'bookings/getTodaysPendingCheckOuts');
  }

  updateBooking(id: number, booking: Booking) {
    return this.http.put(this.baseUrl + 'bookings/' + id, booking);
  }
}
