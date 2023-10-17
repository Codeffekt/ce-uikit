import { Component } from '@angular/core';
import { CeContainerComponent } from '../container/container.component';

@Component({
  selector: 'ce-row',
  template: `<ng-content></ng-content>`
})
export class CeRowComponent extends CeContainerComponent { 
  override hostClasses = ['flex', 'flex-row'];
}
