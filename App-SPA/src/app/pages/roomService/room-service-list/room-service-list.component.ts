import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { RoomService } from './../../../_models/roomService';
import { RoomServiceService } from './../../../core/roomService.service';

@Component({
  selector: 'app-room-service-list',
  templateUrl: './room-service-list.component.html',
  styleUrls: ['./room-service-list.component.scss']
})
export class RoomServiceListComponent implements OnInit {
  roomServices: RoomService[];
  displayedColumns: string[] = ['id', 'bookingId', 'serviceDate', 'isCompleted', 'isPaid',
    'totalPriceBeforeTax', 'taxAmount', 'totalPrice'];
  dataSource: MatTableDataSource<RoomService>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private roomServiceService: RoomServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roomServices = data['roomServices'];
    });
    this.dataSource = new MatTableDataSource(this.roomServices);
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
