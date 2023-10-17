import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeIconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: CeIconButtonComponent;
  let fixture: ComponentFixture<CeIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeIconButtonComponent]
    });
    fixture = TestBed.createComponent(CeIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
