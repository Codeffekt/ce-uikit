import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDialogTitleComponent } from './dialog-title.component';

describe('DialogTitleComponent', () => {
  let component: CeDialogTitleComponent;
  let fixture: ComponentFixture<CeDialogTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeDialogTitleComponent]
    });
    fixture = TestBed.createComponent(CeDialogTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
