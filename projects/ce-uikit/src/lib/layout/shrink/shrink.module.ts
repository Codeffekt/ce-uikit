import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeNoShrinkDirective } from './shrink.directive';

@NgModule({
  declarations: [
    CeNoShrinkDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeNoShrinkDirective
  ]
})
export class CeShrinkModule { }
