import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFormFieldLabelComponent } from './form-field-label.component';

describe('FormFieldLabelComponent', () => {
  let component: CeFormFieldLabelComponent;
  let fixture: ComponentFixture<CeFormFieldLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeFormFieldLabelComponent]
    });
    fixture = TestBed.createComponent(CeFormFieldLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
