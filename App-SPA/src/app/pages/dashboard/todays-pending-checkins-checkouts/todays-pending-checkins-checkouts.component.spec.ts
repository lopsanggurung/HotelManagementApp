/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodaysPendingCheckinsCheckoutsComponent } from './todays-pending-checkins-checkouts.component';

describe('TodaysPendingCheckinsCheckoutsComponent', () => {
  let component: TodaysPendingCheckinsCheckoutsComponent;
  let fixture: ComponentFixture<TodaysPendingCheckinsCheckoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysPendingCheckinsCheckoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysPendingCheckinsCheckoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
