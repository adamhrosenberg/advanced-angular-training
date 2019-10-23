import { TestBed } from '@angular/core/testing';

import { LicensePlateServiceService } from './license-plate-service.service';

describe('LicensePlateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicensePlateServiceService = TestBed.get(LicensePlateServiceService);
    expect(service).toBeTruthy();
  });
});
