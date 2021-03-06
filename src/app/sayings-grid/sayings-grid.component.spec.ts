import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingsGridComponent } from './sayings-grid.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SayingsGridComponent', () => {
  let component: SayingsGridComponent;
  let fixture: ComponentFixture<SayingsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayingsGridComponent, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
