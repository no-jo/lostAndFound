import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';

import { Item } from '../enitities/item';
import { User, IsActive } from '../enitities/user';
import { ItemDetailComponent } from '../components/item-detail.component';
import { FoundItemsComponent } from '../components/found-items.component';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('ItemDetailsComponent', () => {
    let comp: ItemDetailComponent;
    let fixture: ComponentFixture<ItemDetailComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let itemServiceClone: ItemService;
    let locationClone;
    let spy;
    const route = "http://localhost:4200/detail/";
    const item: Item = { name: "test name", id: 202, lostDate: null, category: "something", color: null, creationDate: null, description: null, foundDate: new Date(), isActive: "ACITVE", material: null, photoURL: null, size: null };
    const users: User[] = [{ id: 150, email: "a@a.a", firstName: "Ala", IsActive: IsActive.ACTIVE, lastName: "Kot", login: "aak" },
    {id: 190, email: "b@b.b", firstName: "Bab", IsActive: IsActive.ACTIVE, lastName: "Mam", login: "baa"}];

    let mockActivatedRoute = {
        snapshot: {
          root: {
            firstChild: { params: { id: 11 } }
          }
        }
      };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemDetailComponent],
            imports: [RouterTestingModule.withRoutes([{ path: 'http://localhost:4200/detail/', component: ItemDetailComponent }])],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute},
                { provide: ItemService },
                { provide: UserService},
                { provide: Location }
            ]
        })
            .compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(ItemDetailComponent);
    });

    it('should create the component', () => {
        const c = fixture.debugElement.componentInstance;
        expect(c).toBeTruthy();
    });

    it('should show item details', (async () => {
        //given
        itemServiceClone = fixture.debugElement.injector.get(ItemService);
        spy = spyOn(itemServiceClone, 'getItem')
            .and.returnValue(Promise.resolve(item));
        //when
        fixture.detectChanges();
        //then
        el = fixture.debugElement.query(By.css('#itemId')).nativeElement;
        expect(el.textContent).toContain('13');
    }));

    it('go back should work', (async () => {
        //given
        locationClone = fixture.debugElement.injector.get(Location);
        spy = spyOn(locationClone, 'back');
        //when
        fixture.detectChanges();
        //then
        expect(spy).toHaveBeenCalled();
    }));

});
