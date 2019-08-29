import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingResponseComponent } from './meeting-response.component';

describe('MeetingResponseComponent', () => {
  let component: MeetingResponseComponent;
  let fixture: ComponentFixture<MeetingResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
