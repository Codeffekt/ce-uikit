import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-small',
  template: '<ng-content></ng-content>'
})
export class CeTextSmallComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-small'];
}
