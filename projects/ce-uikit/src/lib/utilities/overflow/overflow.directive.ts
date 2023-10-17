import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

export type CeOverflow = 'visible' | 'hidden' | 'scroll' | 'auto';

@Directive({
  selector: '[overflow],[overflowX],[overflowY]'
})
export class CeOverflowDirective extends CeRenderer {

  @Input() set overflow(value: CeOverflow) {
    this.setStyle('overflow', value);
  }

  @Input() set overflowX(value: CeOverflow) {
    this.setStyle('overflowX', value);
  }

  @Input() set overflowY(value: CeOverflow) {
    this.setStyle('overflowY', value);
  }
}
