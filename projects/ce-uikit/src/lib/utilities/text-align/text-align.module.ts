import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeTextAlignDirective } from './text-align.directive';

@NgModule({
  declarations: [
    CeTextAlignDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeTextAlignDirective
  ]
})
export class CeTextAlignModule { }
