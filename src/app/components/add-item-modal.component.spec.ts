import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalOptions, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ItemService } from '../services/item.service';
import { MetadataService } from '../services/metadata.service';
import { AddItemModalComponent } from '../components/add-item-modal.component';

describe('AddItemModalComponent', () => {

  let comp: AddItemModalComponent;
  let fixture: ComponentFixture<AddItemModalComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let metaServiceClone: MetadataService;
  let spy;
  let sizes: String[] = ["min", "max"];

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemModalComponent], // declare the test component
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: ItemService },
      { provide: MetadataService },
      { provide: NgbModal }]
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemModalComponent);
    fixture.debugElement.properties = { "isLost": false };
  });

  it('should create a modal', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should open with lost item title',(async () => {
    fixture.debugElement.componentInstance.open("content");
    fixture.detectChanges();
    metaServiceClone = fixture.debugElement.injector.get(MetadataService);
    spy = spyOn(metaServiceClone, 'getItemSizes')
      .and.returnValue(Promise.resolve(sizes));
    el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Report lost item:');
  }));
});
