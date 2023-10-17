import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeDarkModule } from './dark';
import { CeBorderModule } from './border';
import { CeSizeModule } from './size';
import { CeOverflowModule } from './overflow';
import { CeCursorModule } from './cursor';
import { CeBackgroundColorModule } from './background-color';
import { CeShadowModule } from './shadow';
import { CeTextAlignModule } from './text-align';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CeBackgroundColorModule,
    CeBorderModule,
    CeDarkModule,
    CeOverflowModule,
    CeSizeModule,
    CeCursorModule,
    CeShadowModule,
    CeTextAlignModule
  ]
})
export class CeUtilitiesModule { }
