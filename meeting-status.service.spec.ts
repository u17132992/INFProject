import { TestBed } from '@angular/core/testing';

import { MeetingStatusService } from './meeting-status.service';

describe('MeetingStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingStatusService = TestBed.get(MeetingStatusService);
    expect(service).toBeTruthy();
  });
});
