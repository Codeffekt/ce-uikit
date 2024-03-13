import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRadioButtonComponent } from './radio-button.component';

describe('RadioButtonComponent', () => {
  let component: CeRadioButtonComponent;
  let fixture: ComponentFixture<CeRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
