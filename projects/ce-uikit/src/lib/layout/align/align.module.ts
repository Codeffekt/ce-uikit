import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeAlignContentDirective } from './align-content.directive';
import { CeAlignItemsDirective } from './align-items.directive';
import { CeAlignSelfDirective } from './align-self.directive';

@NgModule({
  declarations: [
    CeAlignContentDirective,
    CeAlignItemsDirective,
    CeAlignSelfDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeAlignContentDirective,
    CeAlignItemsDirective,
    CeAlignSelfDirective
  ]
})
export class CeAlignModule { }
