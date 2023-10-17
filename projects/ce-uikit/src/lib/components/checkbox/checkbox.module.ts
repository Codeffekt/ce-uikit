import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeCheckboxComponent } from './checkbox.component';
import { CeTextModule } from '../text';
import { CeContainerModule, CeGapModule, CeRowModule } from '../../layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CeCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CeTextModule,
    CeRowModule,
    CeGapModule,
    CeContainerModule
  ],
  exports: [
    CeCheckboxComponent
  ]
})
export class CeCheckboxModule { }
