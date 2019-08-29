import { TestBed } from '@angular/core/testing';

import { PetBreedService } from './pet-breed.service';

describe('PetBreedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetBreedService = TestBed.get(PetBreedService);
    expect(service).toBeTruthy();
  });
});
