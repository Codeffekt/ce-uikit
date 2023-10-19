import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeGradientComponent } from './gradient.component';

describe('GradientComponent', () => {
  let component: CeGradientComponent;
  let fixture: ComponentFixture<CeGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
