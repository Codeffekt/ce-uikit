import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingFourComponent } from './text-heading-four.component';

describe('TextHeadingFourComponent', () => {
  let component: CeTextHeadingFourComponent;
  let fixture: ComponentFixture<CeTextHeadingFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingFourComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
