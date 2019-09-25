/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookingCountByRoomComponent } from './booking-count-by-room.component';

describe('BookingCountByRoomComponent', () => {
  let component: BookingCountByRoomComponent;
  let fixture: ComponentFixture<BookingCountByRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCountByRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCountByRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
