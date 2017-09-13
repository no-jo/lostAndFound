import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'add-item-modal',
    templateUrl: './add-item-modal.component.html'
})
export class AddItemModalComponent {
    @Output() itemRet: EventEmitter<Item> = new EventEmitter<Item>();
    today: Date = new Date();

    constructor(private modalService: NgbModal,
        private itemService: ItemService) { }

    open(content) {
        this.modalService.open(content);
    }

    add(name: string, date: Date): void {
        name = name.trim();
        if (!name || !date) { return; }
        const newItem: Item = new Item();
        newItem.name = name;
        newItem.lostDate = date;
        newItem.foundDate = null;
        newItem.isActive = 'ACTIVE';
        this.itemService.createLost(newItem).subscribe(data => this.itemRet.emit(data));
    }
}
