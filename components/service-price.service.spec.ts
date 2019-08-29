import { TestBed } from '@angular/core/testing';

import { ServicePriceService } from './service-price.service';

describe('ServicePriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePriceService = TestBed.get(ServicePriceService);
    expect(service).toBeTruthy();
  });
});
