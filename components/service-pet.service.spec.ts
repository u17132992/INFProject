import { TestBed } from '@angular/core/testing';

import { ServicePetService } from './service-pet.service';

describe('ServicePetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePetService = TestBed.get(ServicePetService);
    expect(service).toBeTruthy();
  });
});
