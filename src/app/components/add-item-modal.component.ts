import { Component } from '@angular/core';
import { Item } from '../enitities/item';

import { ItemService } from '../services/item.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'add-item-modal',
    templateUrl: './add-item-modal.component.html'
})
export class AddItemModalComponent {
    closeResult: string;
    item: Item;
    today: Date = new Date();

    constructor(private modalService: NgbModal,
        private itemService: ItemService) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    add(name: string, date: Date): void {
        name = name.trim();
        if (!name || !date) { return; }
        const newItem: Item = new Item();
        newItem.name = name;
        newItem.lostDate = date;
        newItem.foundDate = null;
        newItem.isActive = 'ACTIVE';
        this.itemService.createLost(newItem).subscribe(); //data => this.items.push(data));
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
