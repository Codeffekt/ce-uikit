import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextBodyOneComponent } from './text-body-one.component';

describe('TextBodyOneComponent', () => {
  let component: CeTextBodyOneComponent;
  let fixture: ComponentFixture<CeTextBodyOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextBodyOneComponent]
    });
    fixture = TestBed.createComponent(CeTextBodyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
