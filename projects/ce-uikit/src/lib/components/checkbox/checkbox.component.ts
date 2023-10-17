import { Component, HostBinding, HostListener } from '@angular/core';
import { FormControlComponent } from '../form-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ce-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CeCheckboxComponent
    }
  ]
})
export class CeCheckboxComponent extends FormControlComponent<boolean>{ 

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.value = !this.value;
  }
}
