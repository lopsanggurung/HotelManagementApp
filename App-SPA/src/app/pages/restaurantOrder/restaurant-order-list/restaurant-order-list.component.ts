import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { RestaurantOrder } from './../../../_models/restaurantOrder';
import { RestaurantOrderService } from 'src/app/core/restaurantOrder.service';

@Component({
  selector: 'app-restaurant-order-list',
  templateUrl: './restaurant-order-list.component.html',
  styleUrls: ['./restaurant-order-list.component.scss']
})
export class RestaurantOrderListComponent implements OnInit {
  restaurantOrders: RestaurantOrder[];
  displayedColumns: string[] = ['action', 'id', 'bookingId', 'orderFor', 'orderDate', 'isCompleted', 'isPaid',
    'totalPriceBeforeTax', 'taxAmount', 'totalPrice'];
  dataSource: MatTableDataSource<RestaurantOrder>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private restaurantOrderService: RestaurantOrderService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.restaurantOrders = data['restaurantOrders'];
    });
    this.dataSource = new MatTableDataSource(this.restaurantOrders);
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
