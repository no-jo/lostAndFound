
import { TestBed, async } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('Weclome page', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent
      ]
    }).compileComponents();
  }));

  it('should create component', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a welcome header`, () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    let h1 = fixture.nativeElement.querySelectorAll('h1');    
    expect(h1.length).toEqual(1);
    expect(h1[0].innerHTML).toEqual('WELCOME!');
  });
});
