import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-6',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingSixComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-lg'];
}
