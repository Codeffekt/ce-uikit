import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeDarkModeDirective } from './dark-mode.directive';

@NgModule({
  declarations: [
    CeDarkModeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeDarkModeDirective
  ]
})
export class CeDarkModule { }
