/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodaysVacantRoomsComponent } from './todays-vacant-rooms.component';

describe('TodaysVacantRoomsComponent', () => {
  let component: TodaysVacantRoomsComponent;
  let fixture: ComponentFixture<TodaysVacantRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysVacantRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysVacantRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
