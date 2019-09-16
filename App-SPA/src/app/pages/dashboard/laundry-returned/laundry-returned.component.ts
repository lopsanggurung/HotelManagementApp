import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatSnackBar } from '@angular/material';

import { LaundryService } from 'src/app/_models/laundryService';
import { LaundryServiceService } from 'src/app/core/laundryService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laundry-returned',
  templateUrl: './laundry-returned.component.html',
  styleUrls: ['./laundry-returned.component.scss']
})
export class LaundryReturnedComponent implements OnInit {
  laundryReturnedToday: LaundryService[];
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
      this.laundryReturnedToday = data['laundryReturnedToday'];
    });
    this.dataSource = new MatTableDataSource(this.laundryReturnedToday);
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
