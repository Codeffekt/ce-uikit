import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeJustifyItems =
  'start' |
  'end' |
  'center' |
  'stretch';

@Directive({
  selector: '[justifyItems]',
})
export class CeJustifyItemsDirective extends CeRenderer {

  @Input() set justifyItems(value: CeJustifyItems) {
    this.setStyle('justify-items', value);
  }
}
