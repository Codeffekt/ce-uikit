import { Component, Input } from '@angular/core';

@Component({
  selector: 'ce-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class CeFormFieldComponent {
  
  @Input() templateColumns = "2fr 3fr";
}
