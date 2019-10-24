import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';

import { RestaurantOrder } from 'src/app/_models/restaurantOrder';
import { RestaurantOrderService } from 'src/app/core/restaurantOrder.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-restaurant-order-detail',
  templateUrl: './restaurant-order-detail.component.html',
  styleUrls: ['./restaurant-order-detail.component.scss']
})
export class RestaurantOrderDetailComponent implements OnInit {
  restaurantOrder: RestaurantOrder;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private restaurantOrderService: RestaurantOrderService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.restaurantOrder = data['restaurantOrder'];
      console.log(this.restaurantOrder);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '200px',
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.restaurantOrderService.deleteRestaurantOrder(this.restaurantOrder.id).subscribe(
          () => {
            this.snackBar.open('Restaurant Order Deleted', 'Close', { duration: 5000 });
            if (this.restaurantOrder.bookingId !== null) {
              this.router.navigate(['/pages/bookings/', this.restaurantOrder.bookingId]);
            } else {
              this.router.navigate(['/pages/restaurantOrders']);
            }
          },
          error => {
            this.snackBar.open('Failed to delete Restaurant Order', 'Close', { duration: 5000 });
          }
        );
      }
    });
  }
}
