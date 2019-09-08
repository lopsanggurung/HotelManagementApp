/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WakeUpCallServiceService } from './wakeUpCallService.service';

describe('Service: WakeUpCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WakeUpCallServiceService]
    });
  });

  it('should ...', inject([WakeUpCallServiceService], (service: WakeUpCallServiceService) => {
    expect(service).toBeTruthy();
  }));
});
