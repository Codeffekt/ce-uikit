import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CePositionDirective } from './position.directive';
import { CeCenterXDirective } from './center-x.directive';
import { CeCenterYDirective } from './center-y.directive';

@NgModule({
  declarations: [
    CePositionDirective,
    CeCenterXDirective,
    CeCenterYDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CePositionDirective,
    CeCenterXDirective,
    CeCenterYDirective
  ]
})
export class CePositionModule { }
