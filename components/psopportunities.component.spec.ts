import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSOpportunitiesComponent } from './psopportunities.component';

describe('PSOpportunitiesComponent', () => {
  let component: PSOpportunitiesComponent;
  let fixture: ComponentFixture<PSOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
