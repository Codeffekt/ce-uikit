import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemLabelComponent } from './tab-item-label.component';

describe('TabItemLabelComponent', () => {
  let component: TabItemLabelComponent;
  let fixture: ComponentFixture<TabItemLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabItemLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
