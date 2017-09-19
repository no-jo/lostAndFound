import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { ItemService } from '../services/item.service';

import { Item } from '../enitities/item';
import { ItemDetailComponent } from '../components/item-detail.component';
import { FoundItemsComponent } from '../components/found-items.component';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class ActivatedRouteStub
{
    private subject = new BehaviorSubject(this.testParams);
    params = this.subject.asObservable();

    private _testParams: {};
    get testParams() { return this._testParams; }
    set testParams(params: {}) {
        this._testParams = params;
        this.subject.next(params);
    }
}

describe('ItemDetailsComponent', () => {
    let mockParams, mockActivatedRoute;

    let comp: ItemDetailComponent;
    let fixture: ComponentFixture<ItemDetailComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let itemServiceClone: ItemService;
    let locationClone;
    let spy;
    const route = "http://localhost:4200/detail/";
    const item: Item = { name: "test name", id: 202, lostDate: null, category: "something", color: null, creationDate: null, description: null, foundDate: new Date(), isActive: "ACITVE", material: null, photoURL: null, size: null };

    beforeEach(async(() => {
        mockActivatedRoute = new ActivatedRouteStub();

        TestBed.configureTestingModule({
            declarations: [ItemDetailComponent],
            imports: [RouterTestingModule.withRoutes([{ path: 'http://localhost:4200/detail/', component: ItemDetailComponent }])],
            providers: [
                { provide: ActivatedRoute, useValue: mockActivatedRoute},
                { provide: ItemService },
                { provide: Location }
            ]
        })
            .compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(ItemDetailComponent);
        mockActivatedRoute.testParams = {id: '3'};
    });

    it('should create the component', () => {
        const c = fixture.debugElement.componentInstance;
        expect(c).toBeTruthy();
    });

    //both work with ng test -sm=false
    xit('should show item details', (async () => {
        //given
        itemServiceClone = fixture.debugElement.injector.get(ItemService);
        spy = jasmine.createSpy('getItem')
            .and.returnValue(Promise.resolve(item));
        //when
        fixture.detectChanges();
        //then
        el = fixture.debugElement.query(By.css('#itemId')).nativeElement;
        expect(el.textContent).toContain('13');
    }));

    xit('go back should work', (async () => {
        //given
        locationClone = fixture.debugElement.injector.get(Location);
        spy = spyOn(locationClone, 'back');
        //when
        fixture.detectChanges();
        //then
        expect(spy).toHaveBeenCalled();
    }));

});
