import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { Room } from './../../../_models/room';
import { RoomService } from './../../../core/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[];
  displayedColumns: string[] = ['id', 'isArchived', 'price', 'isClean', 'roomNumber',
    'roomType', 'twinBed', 'fullBed', 'queenBed', 'kingBed', 'maxOccupancy'];
  dataSource: MatTableDataSource<Room>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private roomService: RoomService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.rooms = data['rooms'];
    });
    this.dataSource = new MatTableDataSource(this.rooms);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
