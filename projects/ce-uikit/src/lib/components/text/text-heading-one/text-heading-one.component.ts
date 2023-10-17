import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-1',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingOneComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-5xl'];
}
