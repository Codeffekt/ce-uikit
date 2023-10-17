import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CePaddingDirective } from './padding.directive';

@NgModule({
  declarations: [
    CePaddingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CePaddingDirective
  ]
})
export class CePaddingModule { }
