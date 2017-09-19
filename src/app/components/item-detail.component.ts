import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ItemService } from '../services/item.service';
import { Item } from '../enitities/item';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getItemDetails();
    }

    getItemDetails(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.itemService.getItem(+params.get('id')))
        .subscribe(item => this.item = item);
    }

    goBack(): void {
        this.location.back();
    }
}
