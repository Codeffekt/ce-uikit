import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderPageComponent } from './border-page.component';

describe('BorderPageComponent', () => {
  let component: BorderPageComponent;
  let fixture: ComponentFixture<BorderPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorderPageComponent]
    });
    fixture = TestBed.createComponent(BorderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
