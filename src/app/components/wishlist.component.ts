import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { RequestService } from '../services/request.service';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { Item } from '../enitities/item';
import { User } from '../enitities/user';

@Component({
    selector: 'wishlist',
    templateUrl: './wishlist.component.html'
})

export class WishlistComponent implements OnInit {
    user: User = new User;
    wishlist: Item[] = [];

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
            .subscribe(u => {this.user = u; this.itemService.getWishlistByUser(this.user.id).subscribe(data => this.wishlist = data)});
    }

    goBack(): void {
        this.location.back();
    }
}
