import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: CeTabsComponent;
  let fixture: ComponentFixture<CeTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
