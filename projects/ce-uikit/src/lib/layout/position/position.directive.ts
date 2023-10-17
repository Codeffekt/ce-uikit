import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

export type CePosition = 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky';

@Directive({
  selector: '[position]'
})
export class CePositionDirective extends CeRenderer {

  @Input() set position(value: CePosition) {
    this.setStyle('position', value);
  };

  @Input() set top(value: string) {
    this.setStyle('top', value);
  };

  @Input() set left(value: string) {
    this.setStyle('left', value);
  };

  @Input() set right(value: string) {
    this.setStyle('right', value);
  };

  @Input() set bottom(value: string) {
    this.setStyle('bottom', value);
  };
}
