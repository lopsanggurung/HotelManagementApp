import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBookingCountByMonth(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'reports/getBookingCountByMonth');
  }

}
