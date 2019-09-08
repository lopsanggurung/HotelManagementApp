/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LaundryServiceService } from './laundryService.service';

describe('Service: LaundryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaundryServiceService]
    });
  });

  it('should ...', inject([LaundryServiceService], (service: LaundryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
