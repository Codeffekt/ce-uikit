import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeAlignSelf =
  'auto' |
  'flex-start' |
  'flex-end' |
  'start' |
  'end' |
  'center' |
  'stretch' |
  'baseline';

@Directive({
  selector: '[alignSelf]',
})
export class CeAlignSelfDirective extends CeRenderer {

  @Input() set alignSelf(value: CeAlignSelf) {
    this.setStyle('align-self', value);
  }
}
