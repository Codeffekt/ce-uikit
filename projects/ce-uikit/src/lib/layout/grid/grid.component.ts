import { Component, Input } from '@angular/core';
import { CeContainerComponent } from '../container/container.component';

@Component({
  selector: 'ce-grid',
  template: '<ng-content></ng-content>'
})
export class CeGridComponent extends CeContainerComponent {
  override hostClasses = ['grid'];

  @Input() set gridCols(value: string){
    this.setStyle('grid-template-columns', value);
  }

  @Input() set gridRows(value: string) {
    this.setStyle('grid-template-rows', value);
  }

  @Input() set autoFlow(value: string) {
    this.setStyle('grid-auto-flow', value);
  }
 }
