import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormFieldValueComponent } from './form-field-value.component';

describe('FormFieldValueComponent', () => {
  let component: CeFormFieldValueComponent;
  let fixture: ComponentFixture<CeFormFieldValueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeFormFieldValueComponent]
    });
    fixture = TestBed.createComponent(CeFormFieldValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
