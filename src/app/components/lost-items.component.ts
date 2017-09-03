import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'lost-items',
  templateUrl: './lost-items.component.html',
  styleUrls: ['./items.component.css']
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems()
      .then(items => { this.items = items.filter(i => i.lostDate !== null) });
  }

  getItemsBy(name: string, lostDate: Date): void {
    const foundDate = null;
    name = name.trim();
    this.itemService.getItemsBy(name, lostDate, foundDate)
      .then(items => { this.items = items.filter(i => i.lostDate !== null) });
  }

  add(name: string, date: Date): void {
    name = name.trim();
    if (!name || !date) { return; }
    this.itemService.createLost(name, date)
      .then(item => { this.items.push(item); });
  }

  // filterByLost(items: Item[]): void {
  //   this.items = items.filter(i => i.lostDate !== null);
  // }
}
