import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePetComponent } from './service-pet.component';

describe('ServicePetComponent', () => {
  let component: ServicePetComponent;
  let fixture: ComponentFixture<ServicePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
