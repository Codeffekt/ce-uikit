import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-heading-3',
  template: '<ng-content></ng-content>'
})
export class CeTextHeadingThreeComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-3xl'];
}
