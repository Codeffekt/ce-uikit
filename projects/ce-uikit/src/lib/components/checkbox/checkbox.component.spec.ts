import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeCheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CeCheckboxComponent;
  let fixture: ComponentFixture<CeCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeCheckboxComponent]
    });
    fixture = TestBed.createComponent(CeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
