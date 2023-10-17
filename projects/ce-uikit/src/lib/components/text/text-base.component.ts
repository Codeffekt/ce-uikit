import { Component, Input } from '@angular/core';
import { CeRenderer } from '../../core/renderer';

const DEFAULT_TEXT_COLOR = 'text';
const DEFAULT_FONT_WEIGHT: FontWeight = 'normal';

export type FontWeight =
  'thin'
  | 'hairline'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'


@Component({
  template: ''
})
export class CeTextBaseComponent extends CeRenderer {

  override hostClasses = ['block'];

  _color!: string;

  @Input()
  get color() { return this._color };
  set color(value: string) {
    this.setClassValue('text-color', `text-${value}`);
    this._color = value;
  };

  @Input() set font(value: string) {
    this.setClassValue('text-font', `font-${value}`);
  }

  @Input() set fontWeight(value: FontWeight) {
    this.setClassValue('font-weight', `font-${value}`);
  }

  @Input() set display(value: string) {
    this.setStyle('display', value);
  }

  @Input() set selectable(value: boolean) {
    this.setStyle('user-select', value ? 'text' : 'none');
  }

  @Input() set truncate(value: boolean) {
    this.setStyle('white-space', value ? 'nowrap' : 'normal');
    this.setStyle('overflow', value ? 'hidden' : 'visible');
    this.setStyle('text-overflow', value ? 'ellipsis' : 'clip');
  }

  protected override onInit(): void {
    if (!this.color) {
      this.color = DEFAULT_TEXT_COLOR;
    }

    if (!this.fontWeight) {
      this.fontWeight = DEFAULT_FONT_WEIGHT;
    }

    this.setStyle('display', 'block');
  }
}
