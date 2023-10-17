import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingThreeComponent } from './text-heading-three.component';

describe('TextHeadingThreeComponent', () => {
  let component: CeTextHeadingThreeComponent;
  let fixture: ComponentFixture<CeTextHeadingThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingThreeComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
