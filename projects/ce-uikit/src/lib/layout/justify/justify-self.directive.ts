import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeJustifySelf =
  'auto' |
  'start' |
  'end' |
  'center' |
  'stretch';

@Directive({
  selector: '[justifySelf]',
})
export class CeJustifySelfDirective extends CeRenderer {

  @Input() set justifySelf(value: CeJustifySelf) {
    this.setStyle('justify-self', this.justifySelf);
  }
}
