import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeColumnComponent } from './column.component';

describe('ColumnComponent', () => {
  let component: CeColumnComponent;
  let fixture: ComponentFixture<CeColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeColumnComponent]
    });
    fixture = TestBed.createComponent(CeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
