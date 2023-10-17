import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core';

@Directive({
  selector: '[cursor]'
})
export class CeCursorDirective extends CeRenderer {

  @Input() set cursor(value: string) {
    this.setStyle('cursor', value);
  };
}
