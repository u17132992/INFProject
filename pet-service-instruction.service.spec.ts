import { TestBed } from '@angular/core/testing';

import { PetServiceInstructionService } from './pet-service-instruction.service';

describe('PetServiceInstructionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetServiceInstructionService = TestBed.get(PetServiceInstructionService);
    expect(service).toBeTruthy();
  });
});
