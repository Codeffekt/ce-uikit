import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPageComponent } from './row-page.component';

describe('RowPageComponent', () => {
  let component: RowPageComponent;
  let fixture: ComponentFixture<RowPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowPageComponent]
    });
    fixture = TestBed.createComponent(RowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
