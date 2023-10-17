import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDialogActionsComponent } from './dialog-actions.component';

describe('DialogActionsComponent', () => {
  let component: CeDialogActionsComponent;
  let fixture: ComponentFixture<CeDialogActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeDialogActionsComponent]
    });
    fixture = TestBed.createComponent(CeDialogActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
