import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialSitterComponent } from './potential-sitter.component';

describe('PotentialSitterComponent', () => {
  let component: PotentialSitterComponent;
  let fixture: ComponentFixture<PotentialSitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialSitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
