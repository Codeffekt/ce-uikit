import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeGapDirective } from './gap.directive';

@NgModule({
  declarations: [
    CeGapDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeGapDirective
  ]
})
export class CeGapModule { }
