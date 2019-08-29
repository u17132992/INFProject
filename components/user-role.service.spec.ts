import { TestBed } from '@angular/core/testing';

import { UserRolesService } from './user-role.service';

describe('UserRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRolesService = TestBed.get(UserRolesService);
    expect(service).toBeTruthy();
  });
});
