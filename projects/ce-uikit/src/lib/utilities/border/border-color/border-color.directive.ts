import { Directive, HostListener, Input } from '@angular/core';
import { CeRenderer } from '../../../core/renderer';

const DEFAULT_BORDER_COLOR = 'border';

@Directive({
  selector: `
  [borderColor],
  [borderTopColor],
  [borderBottomColor],
  [borderLeftColor],
  [borderRightColor],
  [hover.borderColor],
  [focus.borderColor]
  `
})
export class CeBorderColorDirective extends CeRenderer {

  @Input() set borderColor(value: string) {
    this._borderColor = value;
    this.setBorderSideColor(value);
  };

  @Input() set borderTopColor(value: string) {
    this.setBorderSideColor(value, 't');
  };
  @Input() set borderBottomColor(value: string) {
    this.setBorderSideColor(value, 'b');
  };

  @Input() set borderLeftColor(value: string) {
    this.setBorderSideColor(value, 'l');
  };

  @Input() set borderRightColor(value: string) {
    this.setBorderSideColor(value, 'r');
  };

  @Input({ alias: 'hover.borderColor' }) hoverBorderColor?: string;

  @Input({ alias: 'focus.borderColor' }) focusBorderColor?: string;

  @HostListener('focus') onFocus() {
    this.setBorderSideColor(this.focusBorderColor)
  }

  @HostListener('blur') onBlur() {
    this.setBorderSideColor(this._borderColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isActive()) {
      this.setBorderSideColor(this.hoverBorderColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isActive()) {
      this.setBorderSideColor(this._borderColor);
    }
  }

  private _borderColor: string = DEFAULT_BORDER_COLOR;

  private setBorderSideColor(color: string | undefined, side?: string) {
    if (!color) {
      return;
    }

    const sideString = side ? `-${side}` : '';
    this.setClassValue(`border${sideString}`, `border${sideString}-${color}`);
  }
}
