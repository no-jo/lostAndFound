import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-lost-items',
  templateUrl: './lost-items.component.html'
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];
  today: Date = new Date();

  constructor(
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getLostItems().subscribe(data => this.items = data);
  }

  addNewItem(item: Item) {
    this.items.push(item);
  }

  getItemsBy(name: string, lostDate: Date): void {
    const searchCond: ItemSearchCriteria = new ItemSearchCriteria();
    searchCond.nameLike = name;
    searchCond.lostDateAfter = lostDate;
    name = name.trim();
    this.itemService.getItemsBy(searchCond)
      .subscribe(res => { this.items = Array.from(res); });
  }

  remove(item: Item): void {
    // this.itemService.delete(id).then(this.ngOnInit);
    this.itemService
    .delete(item).subscribe(res => {
      this.items = this.items.filter(i => i.id !== res.id);
    });
  }
}
