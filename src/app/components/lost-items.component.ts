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
      .then(items => { this.items = items.filter(i => i.lost === true) });
  }

}