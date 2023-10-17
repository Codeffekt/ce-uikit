import { Component } from '@angular/core';
import { CeTextBaseComponent } from '../text-base.component';

@Component({
  selector: 'ce-text-body-1, ce-text',
  template: '<ng-content></ng-content>',
})
export class CeTextBodyOneComponent extends CeTextBaseComponent {
  override hostClasses = ['text-base'];
}
