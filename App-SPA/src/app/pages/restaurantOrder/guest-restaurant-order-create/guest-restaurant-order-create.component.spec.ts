/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestRestaurantOrderCreateComponent } from './guest-restaurant-order-create.component';

describe('GuestRestaurantOrderCreateComponent', () => {
  let component: GuestRestaurantOrderCreateComponent;
  let fixture: ComponentFixture<GuestRestaurantOrderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestRestaurantOrderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRestaurantOrderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
