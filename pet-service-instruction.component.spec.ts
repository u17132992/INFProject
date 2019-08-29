import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetServiceInstructionComponent } from './pet-service-instruction.component';

describe('PetServiceInstructionComponent', () => {
  let component: PetServiceInstructionComponent;
  let fixture: ComponentFixture<PetServiceInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetServiceInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetServiceInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
