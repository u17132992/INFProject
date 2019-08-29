import { TestBed } from '@angular/core/testing';

import { MeetingResponseService } from './meeting-response.service';

describe('MeetingResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetingResponseService = TestBed.get(MeetingResponseService);
    expect(service).toBeTruthy();
  });
});
