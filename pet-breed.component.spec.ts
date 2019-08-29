import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBreedComponent } from './pet-breed.component';

describe('PetBreedComponent', () => {
  let component: PetBreedComponent;
  let fixture: ComponentFixture<PetBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
