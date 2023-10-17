import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeBorderRoundedDirective } from './border-rounded/border-rounded.directive';
import { CeBorderColorDirective } from './border-color/border-color.directive';
import { CeBorderDirective } from './border.directive';

@NgModule({
  declarations: [
    CeBorderRoundedDirective,
    CeBorderDirective,
    CeBorderColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeBorderRoundedDirective,
    CeBorderDirective,
    CeBorderColorDirective
  ]
})
export class CeBorderModule { }
