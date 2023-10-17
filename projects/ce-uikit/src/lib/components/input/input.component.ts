import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlComponent } from '../form-control';

@Component({
  selector: 'ce-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeInputComponent
    }
  ]
})
// TODO: Check type for inputt
export class CeInputComponent extends FormControlComponent<number> {
  @Input() type: string = 'text';
  @Input() name?: string;
  @Input() step?: number;
  @Input() placeholder?: string;
  @Input() size: number = 1;
  @Input() modulo?: number;

  override preprocess(value: number | undefined): number | undefined {
    if (this.modulo != undefined && value != undefined) {
      return (value % this.modulo + this.modulo) % this.modulo;
    }
    return value;
  }

}