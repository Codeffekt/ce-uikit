import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeSelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: CeSelectComponent;
  let fixture: ComponentFixture<CeSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeSelectComponent]
    });
    fixture = TestBed.createComponent(CeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
