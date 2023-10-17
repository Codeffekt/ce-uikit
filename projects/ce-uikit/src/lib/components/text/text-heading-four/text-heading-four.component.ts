import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-4',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingFourComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-2xl'];
}
