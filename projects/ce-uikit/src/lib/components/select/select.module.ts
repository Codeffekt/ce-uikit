import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeSelectComponent } from './select.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';
import { OverlayModule } from '@angular/cdk/overlay';
import { CeSelectOptionComponent } from './select-option/select-option.component';
import { CeTextModule } from '../text';
import { CeSelectOptionLabelPipe } from './select-option.pipe';
import { CeIconModule } from '../icon';

@NgModule({
  declarations: [
    CeSelectComponent,
    CeSelectOptionComponent,
    CeSelectOptionLabelPipe
  ],
  imports: [
    CommonModule,
    CeIconModule,
    CeLayoutModule,
    CeUtilitiesModule,
    CeTextModule,
    OverlayModule,
  ],
  exports: [
    CeSelectComponent,
    CeSelectOptionComponent
  ]
})
export class CeSelectModule { }
 