import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';
import { MetadataService } from '../services/metadata.service';

import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'add-item-modal',
    templateUrl: './add-item-modal.component.html'
})
export class AddItemModalComponent {

    @Output() itemRet: EventEmitter<Item> = new EventEmitter<Item>();
    today: Date = new Date();
    sizes: string[] = [];
    newItem: Item = new Item();

    constructor(private modalService: NgbModal,
        private itemService: ItemService,
        private metaService: MetadataService) { }

    open(content) {
        this.modalService.open(content,{size: 'lg'});
    }

    getSizes(): void {
        this.metaService.getItemSizes().subscribe(data => this.sizes = data);
    }

    add(): void {
        this.newItem.isActive = 'ACTIVE';
        this.itemService.createLost(this.newItem).subscribe(data => this.itemRet.emit(data));
        this.newItem = new Item();
    }
}
