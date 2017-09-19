// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

// import { FoundItemsComponent } from '../components/found-items.component';
// import { ItemService } from '../services/item.service';
// import { MetadataService } from '../services/metadata.service';
// import { AddItemModalComponent } from '../components/add-item-modal.component';

// describe('FoundItemsComponent (itemTable)', () => {

//   let comp: FoundItemsComponent;
//   let fixture: ComponentFixture<FoundItemsComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   let itemServiceStub = {};
//   let metaServiceStub = { getItemSizes: ['min', 'max'] };

//   // async beforeEach
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [FoundItemsComponent], // declare the test component
//       providers: [{ provide: ItemService, useValue: itemServiceStub },
//       { provide: MetadataService, useValue: metaServiceStub }]
//     })
//       .compileComponents();  // compile template and css
//   }));

//   // synchronous beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(FoundItemsComponent);

//     comp = fixture.componentInstance; // BannerComponent test instance

//     // query for the title <h1> by CSS element selector
//     de = fixture.debugElement.query(By.css('table'));
//     el = de.nativeElement;
//   });

//   it('should display an item', () => {
//     fixture.detectChanges();
//     expect(el).toBeDefined();
//   });

//   xit('should display a different test title', () => {
//     //comp.title = 'Test Title';
//     fixture.detectChanges();
//     expect(el.textContent).toContain('Test Title');
//   });

// });


// /*
// Copyright 2017 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that
// can be found in the LICENSE file at http://angular.io/license
// */