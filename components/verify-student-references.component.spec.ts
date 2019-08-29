import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStudentReferencesComponent } from './verify-student-references.component';

describe('VerifyStudentReferencesComponent', () => {
  let component: VerifyStudentReferencesComponent;
  let fixture: ComponentFixture<VerifyStudentReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyStudentReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyStudentReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
