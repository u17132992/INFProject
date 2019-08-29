import { TestBed } from '@angular/core/testing';

import { SystemUsersService } from './systemuser.service';

describe('SystemUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemUsersService = TestBed.get(SystemUsersService);
    expect(service).toBeTruthy();
  });
});
