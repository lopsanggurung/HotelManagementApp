import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Room } from '../_models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl + 'rooms');
  }

  getRoom(id): Observable<Room> {
    return this.http.get<Room>(this.baseUrl + 'rooms/' + id);
  }

  // updateRoom(id: number, room: Room) {
  //   return this.http.put(this.baseUrl + 'rooms/' + id, room);
  // }
}
