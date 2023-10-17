import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';
import { CeSizeLevelsUtils } from '../../core/utils/size-levels.utils';

@Directive({
  selector: `
  [margin],
  [marginTop],
  [marginBottom],
  [marginLeft],
  [marginRight],
  [marginX],
  [marginY]`,
})
export class CeMarginDirective extends CeRenderer {

  @Input() set margin(value: number) {
    this.setStyle('margin', CeSizeLevelsUtils.rem(value));
  }

  @Input() set marginTop(value: number) {
    this.setStyle('margin-top', CeSizeLevelsUtils.rem(value));
  }

  @Input() set marginBottom(value: number) {
    this.setStyle('margin-bottom', CeSizeLevelsUtils.rem(value));
  }

  @Input() set marginLeft(value: number) {
    this.setStyle('margin-left', CeSizeLevelsUtils.rem(value));
  }

  @Input() set marginRight(value: number) {
    this.setStyle('margin-right', CeSizeLevelsUtils.rem(value));
  }
  @Input() set marginX(value: number) {
    this.setStyle('margin-right', CeSizeLevelsUtils.rem(value));
    this.setStyle('margin-left', CeSizeLevelsUtils.rem(value));
  }

  @Input() set marginY(value: number) {
    this.setStyle('margin-bottom', CeSizeLevelsUtils.rem(value));
    this.setStyle('margin-top', CeSizeLevelsUtils.rem(value));
  }
}
