import { Directive } from '@angular/core';
import { CeRenderer } from '../../core';

@Directive({
  selector: '[centerY]'
})
export class CeCenterYDirective extends CeRenderer {

  protected override onInit(): void {
    this.setStyle('left', '50%');
    this.setStyle('transform', 'translateX(-50%)')
  }
}
