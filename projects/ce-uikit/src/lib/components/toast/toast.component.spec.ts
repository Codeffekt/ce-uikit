import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: CeToastComponent;
  let fixture: ComponentFixture<CeToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeToastComponent]
    });
    fixture = TestBed.createComponent(CeToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
