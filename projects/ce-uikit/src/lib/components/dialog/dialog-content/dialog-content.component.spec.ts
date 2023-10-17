import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDialogContentComponent } from './dialog-content.component';

describe('DialogContentComponent', () => {
  let component: CeDialogContentComponent;
  let fixture: ComponentFixture<CeDialogContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeDialogContentComponent]
    });
    fixture = TestBed.createComponent(CeDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
