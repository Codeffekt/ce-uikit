import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeInputComponent } from './input.component';

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
    CeInputComponent
  ]
})
export class CeInputModule { }
