import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRadioGroupComponent } from './radio-group.component';

describe('RadioGroupComponent', () => {
  let component: CeRadioGroupComponent<any>;
  let fixture: ComponentFixture<CeRadioGroupComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CeRadioGroupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
