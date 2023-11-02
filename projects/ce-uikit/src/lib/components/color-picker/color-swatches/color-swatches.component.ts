import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CeColorPickerUtils } from '../color-picker.utils';

@Component({
  selector: 'ce-color-swatches',
  templateUrl: './color-swatches.component.html',
  styleUrls: ['./color-swatches.component.css']
})
export class ColorSwatchesComponent implements OnInit {

  @Input() numColors = 18;
  @Output() color = new EventEmitter<string>();

  colors: string[] = []


  ngOnInit(): void {
    this.colors = this.generatePalette();
  }
  onColorSelected(color: string) {
    this.color.next(color);
  }

  private generatePalette(): string[] {

    const colors: string[] = [];
    const hueStep = 360 / this.numColors;

    for (let i = 0; i < this.numColors; i++) {
      const hue = i * hueStep;
      const saturation = 82;
      const brightness = 90;
      const color = CeColorPickerUtils.hsbToHex(hue, saturation, brightness)
      colors.push(color);
    }

    return colors;
  }

}