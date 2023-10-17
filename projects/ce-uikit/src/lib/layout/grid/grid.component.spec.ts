import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: CeGridComponent;
  let fixture: ComponentFixture<CeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeGridComponent]
    });
    fixture = TestBed.createComponent(CeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
