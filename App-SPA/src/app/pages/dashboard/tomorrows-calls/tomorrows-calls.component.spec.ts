/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TomorrowsCallsComponent } from './tomorrows-calls.component';

describe('TomorrowsCallsComponent', () => {
  let component: TomorrowsCallsComponent;
  let fixture: ComponentFixture<TomorrowsCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomorrowsCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomorrowsCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
