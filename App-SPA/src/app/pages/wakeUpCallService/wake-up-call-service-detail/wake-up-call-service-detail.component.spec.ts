/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WakeUpCallServiceDetailComponent } from './wake-up-call-service-detail.component';

describe('WakeUpCallServiceDetailComponent', () => {
  let component: WakeUpCallServiceDetailComponent;
  let fixture: ComponentFixture<WakeUpCallServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakeUpCallServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakeUpCallServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
