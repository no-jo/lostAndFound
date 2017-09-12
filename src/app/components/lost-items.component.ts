import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'lost-items',
  templateUrl: './lost-items.component.html'
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getLostItems().subscribe(data => this.items = data);
  }

  getItemsBy(name: string, lostDate: Date): void {
    const searchCond: ItemSearchCriteria = new ItemSearchCriteria();
    searchCond.nameLike = name;
    searchCond.lostDateAfter = lostDate;
    name = name.trim();
    this.itemService.getItemsBy(searchCond)
      .subscribe(res => { this.items = Array.from(res); });
  }

  add(name: string, date: Date): void {
    name = name.trim();
    if (!name || !date) { return; }
    const newItem: Item = new Item();
    newItem.name = name;
    newItem.lostDate = date;
    newItem.foundDate = null;
    newItem.isActive = 'ACTIVE';
    this.itemService.createLost(newItem).subscribe(data => this.items.push(data));
  }

  remove(item: Item): void {
    // this.itemService.delete(id).then(this.ngOnInit);
    this.itemService
    .delete(item).subscribe(res => {
      this.items = this.items.filter(i => i.id !== res.id);
    });
  }

  // filterByLost(items: Item[]): void {
  //   this.items = items.filter(i => i.lostDate !== null);
  // }
}
