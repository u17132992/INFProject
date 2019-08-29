import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSitterStatusesComponent } from './pet-sitter-status.component';

describe('PetSitterStatusComponent', () => {
  let component: PetSitterStatusesComponent;
  let fixture: ComponentFixture<PetSitterStatusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetSitterStatusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetSitterStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
