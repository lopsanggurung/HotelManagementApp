/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodaysCheckinsCheckoutsComponent } from './todays-checkins-checkouts.component';

describe('TodaysCheckinsCheckoutsComponent', () => {
  let component: TodaysCheckinsCheckoutsComponent;
  let fixture: ComponentFixture<TodaysCheckinsCheckoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysCheckinsCheckoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysCheckinsCheckoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
