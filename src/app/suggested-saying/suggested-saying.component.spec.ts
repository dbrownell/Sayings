import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedSayingComponent } from './suggested-saying.component';

describe('SuggestedSayingComponent', () => {
  let component: SuggestedSayingComponent;
  let fixture: ComponentFixture<SuggestedSayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedSayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedSayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
