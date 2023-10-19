import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CeGradient, CeGradientColorPosition } from '../gradient/gradient';
import { CeColorPickerUtils } from '../color-picker.utils';

@Component({
  selector: 'ce-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnChanges {

  @Input() color!: string;
  @Input() tint?: string;
  @Output() colorChanges = new EventEmitter<string>();

  gradients: CeGradient[] = [];
  colorPosition?: CeGradientColorPosition;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['color']) {
      this.computeTint(this.color);
      this.updateColorPosition(this.color);
    }

    if (changes['gradients'] || changes['tint']) {
      this.updateGradients();
    }
  }

  onColorSelected(color: string) {
    this.colorChanges.next(color);
  }

  onColorPositionChanged(colorPosition: CeGradientColorPosition) {
    this.colorPosition = colorPosition;
  }

  private updateGradients() {
    this.gradients = [
      {
        type: 'horizontal',
        stopColors: ['#fff', this.tint ?? "f00"],
      },
      {
        type: 'vertical', 
        stopColors: ['rgba(0,0,0,0)', '#000'],
      }
    ];
  }

  private computeTint(color: string) {
    this.tint = CeColorPickerUtils.saturateColor(color);
  }

  private updateColorPosition(color: string) {
    const [_, s, b] = CeColorPickerUtils.hexToHsb(color);
    this.colorPosition = { x: s, y: 100 - b }
  }
}
