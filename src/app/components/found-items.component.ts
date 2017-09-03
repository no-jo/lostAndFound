import { Component, OnInit } from '@angular/core';

import { Item }        from '../enitities/item';

//FIXME
//import { ItemService } from './item.service';

@Component({
  selector: 'found-items',
  templateUrl: './found-items.component.html',
  styleUrls: [ './found-items.component.css' ]
})

export class FoundItemsComponent implements OnInit {
  items: Item[] = [];

  //FIXME
  constructor(/*private itemService: ItemService*/) { }

  ngOnInit(): void {
    //FIXME
    /*this.itemService.getItems()
      .then(items => this.items = itmes. ~ found === true);*/
  }
}