import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ce-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class CeColorPickerComponent {

  @Input() color: string = '#AEED5F';
  tint?: string;
  selectedColor = this.color;

  onTintSelected(color: string) {
    this.tint = color;
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
  }
} 
