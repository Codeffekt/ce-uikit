import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';
import { CeSizeLevelsUtils } from '../../core/utils/size-levels.utils';

/**
 * Only affects grid and column componennt
 */
@Directive({
  selector: '[gap],[rowGap],[colGap]',
})
export class CeGapDirective extends CeRenderer {

  @Input() set gap(value: number) {
    this.setStyle('gap', CeSizeLevelsUtils.rem(value));
  }

  @Input() set rowGap(value: number) {
    this.setStyle('row-gap', CeSizeLevelsUtils.rem(value));
  }

  @Input() set colGap(value: number) {
    this.setStyle('column-gap', CeSizeLevelsUtils.rem(value));
  }

}