import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeGrowDirective } from './grow.directive';

@NgModule({
  declarations: [
    CeGrowDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CeGrowDirective
  ]
})
export class CeGrowModule { }
