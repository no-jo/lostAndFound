import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'lost-items',
  templateUrl: './lost-items.component.html'
})

export class LostItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    public modal: Modal) { }

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

  remove(item: Item): void {
    // this.itemService.delete(id).then(this.ngOnInit);
    this.itemService
    .delete(item.id)
    .then(() => {
      this.items = this.items.filter(h => h !== item);
    });
  }

  showDetail(id: number): void {
    this.itemService.getItem(id).then(item => { this.showModal(item); });
  }

  public showModal(item: Item): void {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Details for ' + item.name)
      .body(`<h2>` + item.name + ` details!</h2>
         <div><label>id: </label>` + item.id + `</div>
         <div>
           <div> <label>name: </label>` + item.name + `</div>
           <div *ngIf=` + item.lostDate + `> <label>lost: </label>` + item.lostDate + `</div>
           <div *ngIf=` + item.foundDate + `> <label>found: </label>` + item.foundDate + `</div>
         </div>`)
         .addButton('btn btn-default', 'Delete', close) //TODO how to set up removing the item ?, onkeyup = this.remove(item)
      .open();
  }

  public addNewItemInModal(): void {
    this.modal.prompt()
      .size('lg')
      .showClose(true)
      .title('Add new item')
      .body(`
            <div>
                <label> name </label> <input type="text" #itemName />
                <label>  date </label> <input type="date" #itemDate />
                <button (click)="add(itemName.value, itemDate.value); itemName.value=''"> Add </button>
            </div>
         `)
      .open();
  }
  // filterByLost(items: Item[]): void {
  //   this.items = items.filter(i => i.lostDate !== null);
  // }
}
