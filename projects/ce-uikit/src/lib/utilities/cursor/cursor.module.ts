import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeCursorDirective } from './cursor.directive';

@NgModule({
  declarations: [
    CeCursorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeCursorDirective
  ]
})
export class CeCursorModule { }
