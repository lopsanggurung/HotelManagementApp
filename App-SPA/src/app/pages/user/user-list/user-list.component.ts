import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { User } from './../../../_models/user';
import { UserService } from './../../../core/user.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];
  displayedColumns: string[] = ['id', 'username', 'created', 'lastActive'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.loadUsers();
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //     this.dataSource = new MatTableDataSource(this.users);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }, error => {
  //     this.snackBar.open('Failed to load users', 'Close', { duration: 5000 });
  //   });
  // }

}
