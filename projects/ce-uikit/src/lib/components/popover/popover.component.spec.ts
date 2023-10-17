import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CePopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: CePopoverComponent;
  let fixture: ComponentFixture<CePopoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CePopoverComponent]
    });
    fixture = TestBed.createComponent(CePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
