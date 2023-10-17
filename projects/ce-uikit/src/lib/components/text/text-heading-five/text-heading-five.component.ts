import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-5',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingFiveComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-xl'];
}
