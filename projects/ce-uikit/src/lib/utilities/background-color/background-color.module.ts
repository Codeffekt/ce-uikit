import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeBackgroundColorDirective } from './background-color.directive';

@NgModule({
  declarations: [
    CeBackgroundColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeBackgroundColorDirective
  ]
})
export class CeBackgroundColorModule { }
