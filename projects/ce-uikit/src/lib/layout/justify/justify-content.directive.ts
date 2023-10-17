import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeJustifyContent =
  'normal' |
  'center' |
  'flex-start' |
  'flex-end' |
  'space-between' |
  'space-around' |
  'space-evenly' |
  'stretch';

@Directive({
  selector: '[justifyContent]',
})
export class CeJustifyContentDirective extends CeRenderer{

  @Input() set justifyContent(value: CeJustifyContent) {
    this.setStyle('justify-content', value);
  };
}
