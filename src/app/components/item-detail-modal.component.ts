import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Item } from '../enitities/item';

@Component({
  selector: 'item-detail-modal',
  styles: ['img{ width:360px};'],
  templateUrl: './item-detail-modal.component.html'
})
export class ItemDetailModalComponent {
  closeResult: string;
  @Input() item: Item;

  constructor(
    private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content,{size:"lg"});
  }

}
