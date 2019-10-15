import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RoomService } from '../_models/roomService';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRoomServices(): Observable<RoomService[]> {
    return this.http.get<RoomService[]>(this.baseUrl + 'roomServices');
  }

  getRoomService(id): Observable<RoomService> {
    return this.http.get<RoomService>(this.baseUrl + 'roomServices/' + id);
  }

  createRoomService(roomService: RoomService) {
    return this.http.post(this.baseUrl + 'roomServices/', roomService);
  }

  // updateRoomService(id: number, roomService: RoomService) {
  //   return this.http.put(this.baseUrl + 'roomServices/' + id, roomService);
  // }
}
