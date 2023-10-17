import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

export type CeAlignmentContent =
  'normal' |
  'center' |
  'flex-start' |
  'flex-end' |
  'space-between' |
  'space-around' |
  'space-evenly' |
  'baseline' |
  'stretch';

@Directive({
  selector: '[alignContent]',
})
export class CeAlignContentDirective extends CeRenderer {

  @Input() set alignContent(value: CeAlignmentContent) {
    this.setStyle('align-content', value);
  };
}
