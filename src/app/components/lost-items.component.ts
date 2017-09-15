import { Component, OnInit } from '@angular/core';

import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';

import { ItemService } from '../services/item.service';
import { MetadataService } from '../services/metadata.service';

@Component({
  selector: 'app-lost-items',
  styles: ['.sorting-btn {background-color: pink;} .sorting-btn-desc {background-color: yellow;}'],
  templateUrl: './lost-items.component.html'
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];
  today: Date = new Date();
  searchCriteria: ItemSearchCriteria = new ItemSearchCriteria();
  sizes: string[];

  constructor(
    private itemService: ItemService,
    private metaService: MetadataService) { }

  ngOnInit(): void {
    this.findAllLost();
    this.listSizes();
  }

  findAllLost() : void {
    this.itemService.getLostItems().subscribe(data => this.items = data);
  }

  listSizes(): void {
    this.metaService.getItemSizes().subscribe(data => this.sizes = data);
  }

  addNewItem(item: Item) {
    let temp: Item = item;
    this.items.push(item);
  }

  getItemsBy(): void {
    this.searchCriteria.seekLost = true;
    this.itemService.getItemsBy(this.searchCriteria)
      .subscribe(res => this.items = res );
  }

  remove(item: Item): void {
    // this.itemService.delete(id).then(this.ngOnInit);
    this.itemService
      .delete(item).subscribe(res => {
        this.items = this.items.filter(i => i.id !== res.id);
      });
  }

  OrderByArray(orderType: any, order: number) {
    let o;
    if (order > 0) {
      o = 1;
    } else {
      o = -1
    }
    let values = this.items;
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
