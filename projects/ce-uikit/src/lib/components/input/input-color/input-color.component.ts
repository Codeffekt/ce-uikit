import { Component, Input, OnInit } from '@angular/core';
import { FormControlComponent } from '../../form-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CeColorPickerUpdateMode } from '../../color-picker';

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

  ngOnInit(): void { }

  onColorChanged(color: string) {
      this.value = color;
  }
}
