import { Component, Input } from '@angular/core';

@Component({
  selector: 'ce-color-swatch-item',
  templateUrl: './color-swatch-item.component.html',
  styleUrls: ['./color-swatch-item.component.css']
})
export class ColorSwatchItemComponent {
  @Input() color!: string;
}
