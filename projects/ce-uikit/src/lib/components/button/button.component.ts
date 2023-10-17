import { Component, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { CeRenderer } from '../../core';

const DEFAULT_BUTTON_COLOR = 'primary';

@Component({
  selector: 'ce-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class CeButtonComponent extends CeRenderer {

  @Input() set color(value: string) {
    this._color = value;
    if (value) {
      this.removeClassValue('text-color');
    } else {
      this.setClassValue('text-color', `text-${value}`);
    }
  }

  get color() {
    return this._color ?? DEFAULT_BUTTON_COLOR;
  }

  @Input() set disabled(disabled: boolean) {
    this._disabled = disabled;
    if (disabled) {
      this.setOpacity(0.20);
    } else {
      this.setOpacity(1);
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this._disabled) {
      this.setBrightness(0.7);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this._disabled) {
      this.setBrightness(1);
    }
  }

  private _disabled?: boolean;
  private _color?: string;

  private setOpacity(value: number) {
    this.setStyle('opacity', value.toString());
  }

  private setBrightness(value: number) {
    this.setStyle('filter', `brightness(${value})`);
  }

  protected override onInit(): void {

    if (!this._color) {
      this.color = DEFAULT_BUTTON_COLOR;
    }

    this.setStyle('cursor', 'pointer');
  }
}
