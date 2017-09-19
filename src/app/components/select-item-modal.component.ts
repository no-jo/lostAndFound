import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../enitities/item';
import { User } from '../enitities/user';
import { Request } from '../enitities/request';
import { FormsModule }   from '@angular/forms';

import { ItemService } from '../services/item.service';
import { RequestService} from '../services/request.service';

import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'select-item-modal',
    templateUrl: './select-item-modal.component.html'
})
export class SelectItemModalComponent {
    @Input() user: User = new User();
    @Input() itemsOnWishlist: number = 3;
    @Output() requestRet: EventEmitter<Request> = new EventEmitter<Request>();
    items: Item[] = [];

    constructor(private modalService: NgbModal,
        private itemService: ItemService,
        private requestService: RequestService) { }

    open(content) {
        this.getItems();
        this.modalService.open(content,{size: 'lg'});
    }

    getItems(): void {
        this.itemService.getLostItems().subscribe(data => this.items = data);
    }

    createRequest(item: Item): void {
        let newReq = new Request();
        newReq.item = item;
        newReq.user = this.user;
        this.requestService.create(newReq).subscribe(data => this.requestRet.emit(data));
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
