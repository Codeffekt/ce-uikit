import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeTooltipDirective } from './tooltip.directive';
import { CeTooltipComponent } from './tooltip.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { CeTextModule } from '../text';

@NgModule({
  declarations: [
    CeTooltipDirective,
    CeTooltipComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeUtilitiesModule,
    CeTextModule
  ],
  exports: [
    CeTooltipDirective
  ]
})
export class CeTooltipModule { }
