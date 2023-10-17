import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTextHeadingSixComponent } from './text-heading-six.component';

describe('CeTextHeadingSixComponent', () => {
  let component: CeTextHeadingSixComponent;
  let fixture: ComponentFixture<CeTextHeadingSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeTextHeadingSixComponent]
    });
    fixture = TestBed.createComponent(CeTextHeadingSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
