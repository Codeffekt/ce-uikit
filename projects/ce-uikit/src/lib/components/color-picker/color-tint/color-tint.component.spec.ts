import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTintComponent } from './color-tint.component';

describe('ColorTintComponent', () => {
  let component: ColorTintComponent;
  let fixture: ComponentFixture<ColorTintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorTintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
