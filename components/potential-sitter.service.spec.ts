import { TestBed } from '@angular/core/testing';

import { PotentialSitterService } from './potential-sitter.service';

describe('PotentialSitterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PotentialSitterService = TestBed.get(PotentialSitterService);
    expect(service).toBeTruthy();
  });
});
