import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

import { Booking } from 'src/app/_models/booking';
import { BookingService } from 'src/app/core/booking.service';

@Component({
  selector: 'app-todays-pending-checkins',
  templateUrl: './todays-pending-checkins.component.html',
  styleUrls: ['./todays-pending-checkins.component.scss']
})
export class TodaysPendingCheckinsComponent implements OnInit {
  todaysPendingCheckins: Booking[];
  displayedColumns: string[] = ['name', 'roomNumber', 'checkOutDate'];
  dataSource: MatTableDataSource<Booking>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private bookingService: BookingService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.todaysPendingCheckins = data['todaysPendingCheckins'];
    });
    this.dataSource = new MatTableDataSource(this.todaysPendingCheckins);
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
