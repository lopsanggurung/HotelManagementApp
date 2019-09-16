import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

import { WakeUpCallService } from 'src/app/_models/wakeUpCallService';
import { WakeUpCallServiceService } from 'src/app/core/wakeUpCallService.service';

@Component({
  selector: 'app-tomorrows-calls',
  templateUrl: './tomorrows-calls.component.html',
  styleUrls: ['./tomorrows-calls.component.scss']
})
export class TomorrowsCallsComponent implements OnInit {
  tomorrowsCalls: WakeUpCallService[];
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
      this.tomorrowsCalls = data['tomorrowsCalls'];
    });
    this.dataSource = new MatTableDataSource(this.tomorrowsCalls);
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
