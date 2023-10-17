import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeInputComponent } from './input.component';
import { CeBorderModule, CeSizeModule, CeUtilitiesModule } from '../../utilities';
import { FormsModule } from '@angular/forms';
import { CeLayoutModule, CePaddingModule } from '../../layout';

@NgModule({
  declarations: [
    CeInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CeLayoutModule,
    CeUtilitiesModule
  ],
  exports: [
    CeInputComponent,
  ]
})
export class CeInputModule { }
