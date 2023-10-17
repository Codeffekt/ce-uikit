import { Directive, HostListener, Input } from '@angular/core';
import { CeSizeBorderUtils } from '../../core/utils/size-border.utils';
import { CeBaseBorder } from './base-border';

@Directive({
  selector: `
  [border],
  [borderTop],
  [borderBottom],
  [borderLeft],
  [borderRight],
  [hoverBorder]
  `,
})
export class CeBorderDirective extends CeBaseBorder {

  @Input() set border(value: number | '') {
    this._border = value;
    this.setBorderSideSize(value)
  }
  
  @Input() set borderBottom(value: number | '') {
    this.setBorderSideSize(value, 'bottom')
  }
  
  @Input() set borderTop(value: number | '') {
    this.setBorderSideSize(value, 'top')
  }
  
  @Input() set borderLeft(value: number | '') {
    this.setBorderSideSize(value, 'left')
  }
  
  @Input() set borderRight(value: number | '') {
    this.setBorderSideSize(value, 'right')
  }

  @Input() hoverBorder?: number;

  @HostListener('mouseenter')
  mouseEnter() {
    if (this.hoverBorder) {
      this.setBorderSideSize(this.hoverBorder)
    }
  }

  @HostListener('mouseleave')
  mouseLeave() {
    if (this._border) {
      this.setBorderSideSize(this._border);
    }
  }

  private _border?: number | '';

  private setBorderSideSize(value: number | '', side?: string) {
    const sideString = side ? `${side}-` : '';
    const sanitizedValue = this.sanitizeValue(value, CeSizeBorderUtils.DefaultWidth);
    const size = CeSizeBorderUtils.size(sanitizedValue)
    this.setStyle(`border-${sideString}width`, size);
  }
}
