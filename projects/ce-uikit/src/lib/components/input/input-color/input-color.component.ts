import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CeColorPickerUpdateMode } from '../../color-picker';
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
export class CeInputColorComponent extends FormControlComponent<string> implements OnInit {

  @Input() valueDisplayed = true;
  @Input() updateMode: CeColorPickerUpdateMode = 'continous';
  @Output() pickerState = new EventEmitter<CeColorPickerState>();

  constructor(
    private cdr: ChangeDetectorRef) { super(); }

  ngOnInit(): void { }

  onColorChanged(color: string | undefined) {
    this.value = color;
    // TODO: check this
    this.cdr.detectChanges();
  }

  onStateChanges(state: CeColorPickerState) {

    this.pickerState.next(state);
   
    if (state === 'idle') {
      this.onColorChanged(this.value)
    }
  }
}
