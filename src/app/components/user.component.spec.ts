import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { Item } from '../enitities/item';
import { ItemSearchCriteria } from '../enitities/item-search-criteria';
import { IsActive, User } from '../enitities/user';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { MetadataService } from '../services/metadata.service';

import { UserComponent } from '../components/user.component';

import { FormsModule } from '@angular/forms';

describe('UserComponent', () => {
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let itemServiceClone: ItemService;
    let userServiceClone: UserService;
    let metaService: MetadataService;
    let spy;

    const item: Item = { name: "test name", id: 202, lostDate: null, category: "something", color: null, creationDate: null, description: null, foundDate: new Date(), isActive: "ACITVE", material: null, photoURL: null, size: null };
    const users: User[] = [{ id: 150, email: "a@a.a", firstName: "Ala", IsActive: IsActive.ACTIVE, lastName: "Kot", login: "aak" },
    { id: 190, email: "b@b.b", firstName: "Bab", IsActive: IsActive.ACTIVE, lastName: "Mam", login: "baa" }];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [FormsModule, RouterModule, ConfirmationPopoverModule.forRoot({
                confirmButtonType: 'danger' // set defaults here
            })],
            providers: [
                { provide: ItemService },
                { provide: UserService },
                { provide: MetadataService }
            ]
        })
            .compileComponents();  // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
    });

    it('should create the component', () => {
        const c = fixture.debugElement.componentInstance;
        expect(c).toBeTruthy();
    });

    it('should show two items in list', (async () => {
        userServiceClone = fixture.debugElement.injector.get(UserService);
        spy = spyOn(userServiceClone, 'getAll')
            .and.returnValue(Promise.resolve(users));
        fixture.detectChanges();
        let rows = fixture.debugElement.queryAll(By.css('tr'));
        expect(rows.length).toEqual(2);
    }));
});