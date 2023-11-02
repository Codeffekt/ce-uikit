import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSwatchItemComponent } from './color-swatch-item.component';

describe('ColorSwatchItemComponent', () => {
  let component: ColorSwatchItemComponent;
  let fixture: ComponentFixture<ColorSwatchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSwatchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSwatchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
