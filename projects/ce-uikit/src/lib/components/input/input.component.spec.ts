import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: CeInputComponent;
  let fixture: ComponentFixture<CeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeInputComponent]
    });
    fixture = TestBed.createComponent(CeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
