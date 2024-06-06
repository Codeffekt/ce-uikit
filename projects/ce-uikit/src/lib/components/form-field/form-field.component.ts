import { Component, Input } from '@angular/core';
import { CeAlignItems } from '../../layout';

@Component({
  selector: 'ce-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class CeFormFieldComponent {
  @Input() templateColumns = "2fr 3fr";
  @Input() alignment: CeAlignItems = 'center'
}
