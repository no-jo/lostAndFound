import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'found-items',
  templateUrl: './found-items.component.html'
})

export class FoundItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getFoundItems().subscribe(data => this.items = data);
  }

  getItemsBy(name: string, foundDate: Date): void {
    const lostDate = null;
    name = name.trim();
    this.itemService.getItemsBy(name, lostDate, foundDate)
      .then(items => { this.items = items.filter(i => i.foundDate !== null) });
  }

  add(name: string, date: Date): void {
    name = name.trim();
    if (!name || !date) { return; }
    this.itemService.createFound(name, date)
      .then(item => { this.items.push(item); });
  }
}
