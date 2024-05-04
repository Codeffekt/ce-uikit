import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CeColorUtils } from '../../../utilities';
import { CeGradient } from '../gradient/gradient';
import { CeColorPicked } from '../color-picked.model';

@Component({
  selector: 'ce-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnChanges {

  @Input() color!: string;
  @Input() tint?: string;
  @Output() colorChanges = new EventEmitter<CeColorPicked>();

  gradients: CeGradient[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['color']) {
      this.computeTint(this.color);
      this.colorToPosition(this.color);
    }

    if (changes['color'] || changes['gradients'] || changes['tint']) {
      this.updateGradients();
    }
  }

  onColorSelected(colorPicked: CeColorPicked) {
    this.colorChanges.next(colorPicked);
  }

  colorToPosition(color: string) {
    const [_, s, b] = CeColorUtils.hexToHsb(color);
    const pos = { x: s, y: 100 - b }
    return pos;
  }

  private updateGradients() {
    this.gradients = [
      {
        type: 'horizontal',
        stopColors: ['#fff', this.tint ?? "#000"],
      },
      {
        type: 'vertical',
        stopColors: ['rgba(0,0,0,0)', '#000'],
      }
    ];
  }

  private computeTint(color: string) {
    this.tint = CeColorUtils.saturateColor(color);
  }
}
