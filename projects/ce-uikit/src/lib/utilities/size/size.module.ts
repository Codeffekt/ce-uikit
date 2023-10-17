import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeWidthDirective } from './width.directive';
import { CeHeightDirective } from './height.directive';

@NgModule({
  declarations: [
    CeWidthDirective,
    CeHeightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeWidthDirective,
    CeHeightDirective
  ]
})
export class CeSizeModule { }
