import { Component, OnInit } from '@angular/core';

import { Item }        from '../enitities/item';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'found-items',
  templateUrl: './found-items.component.html',
  styleUrls: [ './items.component.css' ]
})

export class FoundItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems()
    .then(items => { this.items = items.filter(i => i.foundDate != null) });
  }

  add(name: string, date: Date): void {
    name = name.trim();
    if (!name || !date) { return; }
    this.itemService.createFound(name, date)
      .then(item => { this.items.push(item); });
  }
}