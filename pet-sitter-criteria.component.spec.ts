import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSitterCriteriaComponent } from './pet-sitter-criteria.component';

describe('PetSitterCriteriaComponent', () => {
  let component: PetSitterCriteriaComponent;
  let fixture: ComponentFixture<PetSitterCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetSitterCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetSitterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
