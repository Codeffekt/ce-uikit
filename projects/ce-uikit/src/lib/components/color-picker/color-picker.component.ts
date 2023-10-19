import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { CeColorPickerUtils } from './color-picker.utils';

@Component({
  selector: 'ce-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CeColorPickerComponent {

  @Input() color: string = '#1dbaa5';
  tint?: string;
  selectedColor?:string;

  onTintSelected(color: string) {
    this.tint = color;
  }

  onColorSelected(color: string) {
    this.selectedColor = color;
  }
}
