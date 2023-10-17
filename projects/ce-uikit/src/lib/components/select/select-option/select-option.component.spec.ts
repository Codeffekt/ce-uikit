import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeSelectOptionComponent } from './select-option.component';

describe('SelectOptionComponent', () => {
  let component: CeSelectOptionComponent;
  let fixture: ComponentFixture<CeSelectOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeSelectOptionComponent]
    });
    fixture = TestBed.createComponent(CeSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
