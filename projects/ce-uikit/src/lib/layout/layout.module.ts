import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeGridModule } from './grid';
import { CePaddingModule } from './padding';
import { CeMarginModule } from './margin';
import { CeRowModule } from './row';
import { CeGrowModule } from './grow';
import { CeGapModule } from './gap';
import { CeColumnModule } from './column';
import { CeAlignModule } from './align';
import { CeJustifyModule } from './justify';
import { CeContainerModule } from './container';
import { CeShrinkModule } from './shrink';
import { CePositionModule } from './position';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CeAlignModule,
    CeColumnModule,
    CeContainerModule,
    CeGapModule,
    CeGridModule,
    CeGrowModule,
    CeJustifyModule,
    CeMarginModule,
    CePaddingModule,
    CePositionModule,
    CeRowModule,
    CeShrinkModule
  ]
})
export class CeLayoutModule { }
