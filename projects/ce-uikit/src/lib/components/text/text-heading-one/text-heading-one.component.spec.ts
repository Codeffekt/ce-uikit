import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingOneComponent } from './text-heading-one.component';

describe('TextHeadingOneComponent', () => {
  let component: CeTextHeadingOneComponent;
  let fixture: ComponentFixture<CeTextHeadingOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingOneComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
