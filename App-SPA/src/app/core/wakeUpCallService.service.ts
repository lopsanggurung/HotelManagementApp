import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { WakeUpCallService } from '../_models/wakeUpCallService';

@Injectable({
  providedIn: 'root'
})
export class WakeUpCallServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getWakeUpCallServices(): Observable<WakeUpCallService[]> {
    return this.http.get<WakeUpCallService[]>(this.baseUrl + 'wakeUpCallServices');
  }

  getWakeUpCallService(id): Observable<WakeUpCallService> {
    return this.http.get<WakeUpCallService>(this.baseUrl + 'wakeUpCallServices/' + id);
  }

  // updateWakeUpCallService(id: number, wakeUpCallService: WakeUpCallService) {
  //   return this.http.put(this.baseUrl + 'wakeUpCallServices/' + id, wakeUpCallService);
  // }
}
