import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { SayingsNavComponent } from './sayings-nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SayingsNavComponent', () => {
  let component: SayingsNavComponent;
  let fixture: ComponentFixture<SayingsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SayingsNavComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
});
