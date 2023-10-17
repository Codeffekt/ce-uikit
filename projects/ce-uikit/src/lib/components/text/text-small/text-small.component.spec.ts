import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextSmallComponent } from './text-small.component';

describe('CeTextSmallComponent', () => {
  let component: CeTextSmallComponent;
  let fixture: ComponentFixture<CeTextSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextSmallComponent]
    });
    fixture = TestBed.createComponent(CeTextSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
