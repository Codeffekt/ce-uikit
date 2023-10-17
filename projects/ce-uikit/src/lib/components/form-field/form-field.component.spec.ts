import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
  let component: CeFormFieldComponent;
  let fixture: ComponentFixture<CeFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeFormFieldComponent]
    });
    fixture = TestBed.createComponent(CeFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
