import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { LaundryService } from './../../../_models/laundryService';
import { LaundryServiceService } from './../../../core/laundryService.service';

@Component({
  selector: 'app-laundry-service-list',
  templateUrl: './laundry-service-list.component.html',
  styleUrls: ['./laundry-service-list.component.scss']
})
export class LaundryServiceListComponent implements OnInit {
  laundryServices: LaundryService[];
  displayedColumns: string[] = ['id', 'bookingId', 'dateOrdered', 'dateReturnedFromLaundry', 'dateReturnedToGuest',
    'isPaid', 'totalPriceBeforeTax', 'taxAmount', 'totalPrice'];
  dataSource: MatTableDataSource<LaundryService>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private laundryServiceService: LaundryServiceService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.laundryServices = data['laundryServices'];
    });
    this.dataSource = new MatTableDataSource(this.laundryServices);
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
