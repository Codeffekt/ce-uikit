import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-2',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingTwoComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-4xl'];
}
