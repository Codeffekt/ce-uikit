import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeMarginDirective } from './margin.directive';

@NgModule({
  declarations: [
    CeMarginDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeMarginDirective
  ]
})
export class CeMarginModule { }
