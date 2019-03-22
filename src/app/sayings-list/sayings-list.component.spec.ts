import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingsListComponent } from './sayings-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SayingsListComponent', () => {
  let component: SayingsListComponent;
  let fixture: ComponentFixture<SayingsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayingsListComponent, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
