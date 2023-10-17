import { Directive, Input } from '@angular/core';
import { CeRenderer } from '../../../core/renderer';
import { CeBorderDimension, CeSizeBorderRadiusUtils } from '../../../core/utils/size-border-radius.utils';

const DEFAULT_BORDER_RADIUS: CeBorderDimension = 'default';

@Directive({
  selector: '[rounded]',
})
export class CeBorderRoundedDirective extends CeRenderer {

  @Input() set rounded(value: CeBorderDimension | string) {
    const sanitizedValue = this.sanitizeValue(value, DEFAULT_BORDER_RADIUS);
    const radius = CeSizeBorderRadiusUtils.radius(sanitizedValue);
    this.setStyle('border-radius', radius)
  }
}
