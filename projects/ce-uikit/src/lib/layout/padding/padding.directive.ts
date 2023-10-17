import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';
import { CeSizeLevelsUtils } from '../../core/utils/size-levels.utils';

@Directive({
  selector: `
  [padding],
  [paddingTop],
  [paddingBottom],
  [paddingLeft],
  [paddingRight],
  [paddingX],
  [paddingY]`,
})
export class CePaddingDirective extends CeRenderer {

  @Input() set padding(value: number) {
    this.setStyle('padding', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingTop(value: number) {
    this.setStyle('padding-top', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingBottom(value: number) {
    this.setStyle('padding-bottom', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingLeft(value: number) {
    this.setStyle('padding-left', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingRight(value: number) {
    this.setStyle('padding-right', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingX(value: number) {
    this.setStyle('padding-right', CeSizeLevelsUtils.rem(value));
    this.setStyle('padding-left', CeSizeLevelsUtils.rem(value));
  }

  @Input() set paddingY(value: number) {
    this.setStyle('padding-bottom', CeSizeLevelsUtils.rem(value));
    this.setStyle('padding-top', CeSizeLevelsUtils.rem(value));
  }
}
