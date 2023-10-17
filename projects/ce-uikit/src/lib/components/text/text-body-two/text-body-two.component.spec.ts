import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextBodyTwoComponent } from './text-body-two.component';

describe('CeTextBodyTwoComponent', () => {
  let component: CeTextBodyTwoComponent;
  let fixture: ComponentFixture<CeTextBodyTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextBodyTwoComponent]
    });
    fixture = TestBed.createComponent(CeTextBodyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
