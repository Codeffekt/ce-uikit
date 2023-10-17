import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeTextModule } from '../text';
import { CeFormFieldLabelComponent } from './form-field-label/form-field-label.component';
import { CeFormFieldValueComponent } from './form-field-value/form-field-value.component';
import { CeFormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [
    CeFormFieldComponent,
    CeFormFieldLabelComponent,
    CeFormFieldValueComponent
  ],
  imports: [
    CommonModule,
    CeTextModule,
    CeLayoutModule,
    CeUtilitiesModule
    
  ],
  exports:[
    CeFormFieldComponent,
    CeFormFieldLabelComponent,
    CeFormFieldValueComponent
  ]
})
export class CeFormFieldModule { }
