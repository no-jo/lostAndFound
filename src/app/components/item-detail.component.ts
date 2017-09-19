import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { Item } from '../enitities/item';
import { User } from '../enitities/user';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html'
})

export class ItemDetailComponent implements OnInit {
    item: Item = new Item();
    users: User[] = [];

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        this.getItemDetails();
        this.getUserQueue();
    }

    getItemDetails(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.itemService.getItem(+params.get('id')))
        .subscribe(item => this.item = item);
    }

    getUserQueue(): void {
        this.route.paramMap
        .switchMap((params: ParamMap) => this.userService.getUserQueueBy(+params.get('id')))
        .subscribe(data => this.users = data);
    }

    goBack(): void {
        this.location.back();
    }
}
