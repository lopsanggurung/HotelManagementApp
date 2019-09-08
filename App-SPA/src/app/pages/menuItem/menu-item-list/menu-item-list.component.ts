import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort, MatSnackBar } from '@angular/material';

import { MenuItem } from './../../../_models/menuItem';
import { MenuItemService } from './../../../core/menuItem.service';

@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.scss']
})
export class MenuItemListComponent implements OnInit {
  menuItems: MenuItem[];
  displayedColumns: string[] = ['id', 'isArchived', 'name', 'description', 'isBarItem',
    'category', 'subCategory', 'price'];
  dataSource: MatTableDataSource<MenuItem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private menuItemService: MenuItemService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.menuItems = data['menuItems'];
    });
    this.dataSource = new MatTableDataSource(this.menuItems);
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
