import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ItemService } from '../services/item.service';
import { Item } from '../enitities/item';

@Component({
    selector: 'item-detail',
    templateUrl: './item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
    @Input() item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.itemService.getItem(+params.get('id')))
            .subscribe(item => this.item = item);
    }

    goBack(): void {
        this.location.back();
    }

    // save(): void {
    //     this.itemService.update(this.item)
    //         .then(() => this.goBack());
    // }
}
