import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeInputColorComponent } from './input-color.component';

describe('InputColorComponent', () => {
  let component: CeInputColorComponent;
  let fixture: ComponentFixture<CeInputColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeInputColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeInputColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
