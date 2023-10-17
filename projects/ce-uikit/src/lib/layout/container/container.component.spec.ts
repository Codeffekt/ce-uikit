import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeContainerComponent } from './container.component';

describe('CeContainerComponent', () => {
  let component: CeContainerComponent;
  let fixture: ComponentFixture<CeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeContainerComponent]
    });
    fixture = TestBed.createComponent(CeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
