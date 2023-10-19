import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorHandlerComponent } from './color-handler.component';

describe('ColorHandlerComponent', () => {
  let component: ColorHandlerComponent;
  let fixture: ComponentFixture<ColorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
