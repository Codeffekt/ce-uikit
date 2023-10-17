import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeIconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: CeIconComponent;
  let fixture: ComponentFixture<CeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeIconComponent]
    });
    fixture = TestBed.createComponent(CeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
