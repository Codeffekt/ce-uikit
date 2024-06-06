import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcTextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: IcTextAreaComponent;
  let fixture: ComponentFixture<IcTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
