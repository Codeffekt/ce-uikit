import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: CeColorPickerComponent;
  let fixture: ComponentFixture<CeColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
