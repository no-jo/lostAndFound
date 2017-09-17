import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';
import { User } from '../enitities/user';

import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'users',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  users: User[] = [];
  search: User = new User();

  constructor(
    private itemService: ItemService,
    private userService: UserService,
    private metaService: MetadataService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(): void {
    this.userService.getAll().subscribe(data => this.users = data);
  }

  addNewUser(user: User) {
    this.users.push(user);
  }

  remove(user: User): void {
    this.userService
      .delete(user).subscribe(res => {
        this.users = this.users.filter(i => i.id !== res.id);
      });
  }

  filterUsers() :void {
    this.userService.getUsersBy(this.search).subscribe(data => this.users = data);
    this.search = new User();
  }

  OrderByArray(orderType: any, order: number) {
    let o;
    if (order > 0) {
      o = 1;
    } else {
      o = -1
    }
    let values = this.users;
    return values.sort((a, b) => {
      if (a[orderType] < b[orderType]) {
        return -1 * o;
      }
      if (a[orderType] > b[orderType]) {
        return 1 * o;
      }
      return 0
    });
  }
}
