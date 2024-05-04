import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CeColorPickerState } from '../../color-picker/color-picker-state.service';
import { FormControlComponent } from '../../form-control';

@Component({
  selector: 'ce-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeInputColorComponent
    }
  ]
})
export class CeInputColorComponent extends FormControlComponent<string> {

  @Input() valueDisplayed = true;
  @Output() pickerState = new EventEmitter<CeColorPickerState>();
  @Output() previewColor = new EventEmitter<string | undefined>();

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  onColorChanged(color: string | undefined) {
    this.value = color;

    // TODO: check this
    this.cdr.detectChanges();
  }

  onPreviewColorChanged(color: string) {
    this.previewColor.next(color);
  }

  onStateChanges(state: CeColorPickerState) {
    this.pickerState.next(state);
  }
}
