import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTabItemComponent } from './tab-item.component';

describe('TabItemComponent', () => {
  let component: CeTabItemComponent;
  let fixture: ComponentFixture<CeTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeTabItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
