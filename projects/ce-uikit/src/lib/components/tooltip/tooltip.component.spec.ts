import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: CeTooltipComponent;
  let fixture: ComponentFixture<CeTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTooltipComponent]
    });
    fixture = TestBed.createComponent(CeTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
