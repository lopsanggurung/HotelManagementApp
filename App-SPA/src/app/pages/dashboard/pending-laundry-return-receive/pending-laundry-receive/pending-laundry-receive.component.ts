import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

import { LaundryService } from 'src/app/_models/laundryService';
import { LaundryServiceService } from 'src/app/core/laundryService.service';

@Component({
  selector: 'app-pending-laundry-receive',
  templateUrl: './pending-laundry-receive.component.html',
  styleUrls: ['./pending-laundry-receive.component.scss']
})
export class PendingLaundryReceiveComponent implements OnInit {
  pendingLaundryReceive: LaundryService[];
  displayedColumns: string[] = ['name', 'roomNumber', 'isPaid'];
  dataSource: MatTableDataSource<LaundryService>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private laundryServiceService: LaundryServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.pendingLaundryReceive = data['pendingLaundryReceive'];
    });
    this.dataSource = new MatTableDataSource(this.pendingLaundryReceive);
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
