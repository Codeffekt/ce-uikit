import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CeGradient, CeGradientColorPosition } from '../gradient/gradient';
import { CeColorPickerUtils } from '../color-picker.utils';

@Component({
  selector: 'ce-color-tint',
  templateUrl: './color-tint.component.html',
  styleUrls: ['./color-tint.component.css']
})
export class ColorTintComponent implements OnInit {

  @Input() color!: string;

  @Output() tint = new EventEmitter<string>();

  gradient: CeGradient = {
    type: 'horizontal',
    stopColors: ['red', '#ff0', '#0f0', '#0ff', '#00f', '#f0f', 'red']
  }

  constructor() { }

  ngOnInit(): void {
  }

  onTintSelected(color: string) {
    this.tint.next(color);
  }

  colorToPosition(): CeGradientColorPosition {
    const [h, _, __] = CeColorPickerUtils.hexToHsb(this.color);
    return { x: h * 100 / 360, y: 50, };
  }
}
