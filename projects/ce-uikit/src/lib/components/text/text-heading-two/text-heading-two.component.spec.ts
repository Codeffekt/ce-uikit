import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingTwoComponent } from './text-heading-two.component';

describe('TextHeadingTwoComponent', () => {
  let component: CeTextHeadingTwoComponent;
  let fixture: ComponentFixture<CeTextHeadingTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingTwoComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
