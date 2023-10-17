import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

@Directive({
  selector: '[grow]',
})
export class CeGrowDirective extends CeRenderer {

  @Input() set grow(value: number | '') {
    if (value === 0) {
      this.removeClass('grow');
    } else {
      this.addClass('grow');
    }
  };
}
