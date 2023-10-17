import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: CeButtonComponent;
  let fixture: ComponentFixture<CeButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeButtonComponent]
    });
    fixture = TestBed.createComponent(CeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
