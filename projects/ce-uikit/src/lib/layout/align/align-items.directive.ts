import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeAlignItems =
  'flex-start' |
  'flex-end' |
  'center' |
  'baseline' |
  'stretch';

@Directive({
  selector: '[alignItems]',
})
export class CeAlignItemsDirective extends CeRenderer {

  @Input() set alignItems(value: CeAlignItems) {
    this.setStyle('align-items', value);
  }
}
