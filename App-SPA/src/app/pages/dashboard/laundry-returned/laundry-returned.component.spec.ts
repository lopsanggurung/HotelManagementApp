/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaundryReturnedComponent } from './laundry-returned.component';

describe('LaundryReturnedComponent', () => {
  let component: LaundryReturnedComponent;
  let fixture: ComponentFixture<LaundryReturnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaundryReturnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryReturnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
