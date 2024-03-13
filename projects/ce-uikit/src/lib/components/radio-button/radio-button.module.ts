import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeRadioGroupComponent } from './radio-group/radio-group.component';
import { CeRadioButtonComponent } from './radio-button/radio-button.component';
import { CeLayoutModule } from '../../layout';
import { CeTextModule } from '../text';
import { CeUtilitiesModule } from '../../utilities';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CeRadioGroupComponent,
    CeRadioButtonComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeUtilitiesModule,
    CeTextModule,
    FormsModule
  ],
  exports: [
    CeRadioGroupComponent,
    CeRadioButtonComponent
  ]
})
export class CeRadioButtonModule { }
