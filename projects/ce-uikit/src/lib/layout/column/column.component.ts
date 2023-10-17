import { Component } from '@angular/core';
import { CeContainerComponent } from '../container/container.component';

@Component({
  selector: 'ce-column',
  template: `<ng-content></ng-content>`
})
export class CeColumnComponent extends CeContainerComponent {
  override hostClasses = ['flex', 'flex-col'];
}
