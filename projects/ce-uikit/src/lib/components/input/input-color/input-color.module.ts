import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeInputColorComponent } from './input-color.component';
import { CeColorPickerModule } from '../../color-picker';
import { CeTextModule } from '../../text';
import { CeLayoutModule } from '../../../layout';
import { CeUtilitiesModule } from '../../../utilities';

@NgModule({
  declarations: [
    CeInputColorComponent
  ],
  imports: [
    CommonModule,
    CeColorPickerModule,
    CeTextModule,
    CeLayoutModule,
    CeUtilitiesModule
  ],
  exports: [
    CeInputColorComponent
  ]
})
export class CeInputColorModule { }
