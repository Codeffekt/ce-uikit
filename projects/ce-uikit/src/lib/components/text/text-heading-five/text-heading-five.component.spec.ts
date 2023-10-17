import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingFiveComponent } from './text-heading-five.component';

describe('CeTextHeadingFiveComponent', () => {
  let component: CeTextHeadingFiveComponent;
  let fixture: ComponentFixture<CeTextHeadingFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingFiveComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
