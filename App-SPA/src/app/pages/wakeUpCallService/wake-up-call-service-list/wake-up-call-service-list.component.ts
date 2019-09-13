import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { WakeUpCallService } from './../../../_models/wakeUpCallService';
import { WakeUpCallServiceService } from './../../../core/wakeUpCallService.service';


@Component({
  selector: 'app-wake-up-call-service-list',
  templateUrl: './wake-up-call-service-list.component.html',
  styleUrls: ['./wake-up-call-service-list.component.scss']
})
export class WakeUpCallServiceListComponent implements OnInit {
  wakeUpCallServices: WakeUpCallService[];
  displayedColumns: string[] = ['id', 'bookingId', 'wakeUpCallTime', 'wakeUpCallDate',
  'roomNumber', 'firstName', 'lastName', 'isCompleted'];
  dataSource: MatTableDataSource<WakeUpCallService>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private wakeUpCallServiceService: WakeUpCallServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.wakeUpCallServices = data['wakeUpCallServices'];
    });
    this.dataSource = new MatTableDataSource(this.wakeUpCallServices);
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
