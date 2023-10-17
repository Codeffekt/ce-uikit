import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeRowComponent } from './row.component';

describe('RowComponent', () => {
  let component: CeRowComponent;
  let fixture: ComponentFixture<CeRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeRowComponent]
    });
    fixture = TestBed.createComponent(CeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
