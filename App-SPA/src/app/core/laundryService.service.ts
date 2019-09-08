import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LaundryService } from '../_models/laundryService';

@Injectable({
  providedIn: 'root'
})
export class LaundryServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLaundryServices(): Observable<LaundryService[]> {
    return this.http.get<LaundryService[]>(this.baseUrl + 'laundryServices');
  }

  getLaundryService(id): Observable<LaundryService> {
    return this.http.get<LaundryService>(this.baseUrl + 'laundryServices/' + id);
  }

  // updateLaundryService(id: number, laundryService: LaundryService) {
  //   return this.http.put(this.baseUrl + 'laundryServices/' + id, laundryService);
  // }
}
