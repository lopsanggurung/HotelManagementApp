/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodaysCallsComponent } from './todays-calls.component';

describe('TodaysCallsComponent', () => {
  let component: TodaysCallsComponent;
  let fixture: ComponentFixture<TodaysCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
