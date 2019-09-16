import { Component, OnInit, ViewChild } from '@angular/core';

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { WakeUpCallServiceService } from 'src/app/core/wakeUpCallService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todays-calls',
  templateUrl: './todays-calls.component.html',
  styleUrls: ['./todays-calls.component.scss']
})
export class TodaysCallsComponent implements OnInit {
  todaysCalls: WakeUpCallService[];
  displayedColumns: string[] = ['wakeUpCallTime',
  'roomNumber', 'name', 'isCompleted'];
  dataSource: MatTableDataSource<WakeUpCallService>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private wakeUpCallServiceService: WakeUpCallServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.todaysCalls = data['todaysCalls'];
    });
    this.dataSource = new MatTableDataSource(this.todaysCalls);
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
