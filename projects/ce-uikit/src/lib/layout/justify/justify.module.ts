import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeJustifyContentDirective } from './justify-content.directive';
import { CeJustifyItemsDirective } from './justify-items.directive';
import { CeJustifySelfDirective } from './justify-self.directive';

@NgModule({
  declarations: [
    CeJustifyContentDirective,
    CeJustifyItemsDirective,
    CeJustifySelfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeJustifyContentDirective,
    CeJustifyItemsDirective,
    CeJustifySelfDirective
  ]
})
export class CeJustifyModule { }
