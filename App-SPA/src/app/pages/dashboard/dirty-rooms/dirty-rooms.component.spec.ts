/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DirtyRoomsComponent } from './dirty-rooms.component';

describe('DirtyRoomsComponent', () => {
  let component: DirtyRoomsComponent;
  let fixture: ComponentFixture<DirtyRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirtyRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirtyRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
