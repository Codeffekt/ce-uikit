import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-body-2',
  template: '<ng-content></ng-content>'
})
export class CeTextBodyTwoComponent extends CeTextBaseComponent { 
  override hostClasses = ['text-base', 'font-medium'];
}
