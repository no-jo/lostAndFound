import { Component, OnInit } from '@angular/core';

import { Item }        from '../enitities/item';

//FIXME
//import { ItemService } from './item.service';

@Component({
  selector: 'lost-items',
  templateUrl: './lost-items.component.html',
  styleUrls: [ './lost-items.component.css' ]
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];

  //FIXME
  constructor(/*private itemService: ItemService*/) { }

  ngOnInit(): void {
    //FIXME
    /*this.itemService.getItems()
      .then(items => this.items = itmes. ~ lost === true);*/
  }
}