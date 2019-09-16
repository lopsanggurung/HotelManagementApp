/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PendingLaundryReturnReceiveComponent } from './pending-laundry-return-receive.component';

describe('PendingLaundryReturnReceiveComponent', () => {
  let component: PendingLaundryReturnReceiveComponent;
  let fixture: ComponentFixture<PendingLaundryReturnReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLaundryReturnReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLaundryReturnReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
