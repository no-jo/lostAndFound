import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { RequestService } from '../services/request.service';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { Item } from '../enitities/item';
import { User } from '../enitities/user';
import { Request } from '../enitities/request';

import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'wishlist',
    templateUrl: './wishlist.component.html',
    providers: [NgbRatingConfig]
})

export class WishlistComponent implements OnInit {
    user: User = new User;
    wishlist: Request[] = [];
    items: Item[] = [];

    constructor(
        private requestService: RequestService,
        private userService: UserService,
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
            .subscribe(u => { this.user = u; this.requestService.getRequestsBy(this.user.id).subscribe(data => this.wishlist = data) });
        this.getAllItems();
    }

    getAllItems(): void {
        this.itemService.getFoundItems().subscribe(data => this.items = data);
    }
    removeRequest(request: Request): void {
        this.requestService.delete(request).subscribe(response => {
            this.wishlist = this.wishlist.filter(req => req.id !== response.id);
        })
    }

    addToWishlist(req: Request): void {
        this.wishlist.push(req);
    }

    goBack(): void {
        this.location.back();
    }

}
