import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeShadowDirective } from './shadow.directive';

@NgModule({
  declarations: [
    CeShadowDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeShadowDirective
  ]
})
export class CeShadowModule { }
