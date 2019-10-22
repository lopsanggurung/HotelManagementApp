import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from 'src/app/core/room.service';

@Component({
  selector: 'app-room-service-detail',
  templateUrl: './room-service-detail.component.html',
  styleUrls: ['./room-service-detail.component.scss']
})
export class RoomServiceDetailComponent implements OnInit {
  roomService: RoomService;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roomService = data['roomService'];
      console.log(this.roomService);
    });
  }
}
