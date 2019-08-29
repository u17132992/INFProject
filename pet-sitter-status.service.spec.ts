import { TestBed } from '@angular/core/testing';

import { PetSitterStatusService } from './pet-sitter-status.service';

describe('PetSitterStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetSitterStatusService = TestBed.get(PetSitterStatusService);
    expect(service).toBeTruthy();
  });
});
