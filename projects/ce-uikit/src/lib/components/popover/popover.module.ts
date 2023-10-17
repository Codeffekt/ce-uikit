import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CePopoverComponent } from './popover.component';
import { CeLayoutModule } from '../../layout';
import { CeUtilitiesModule } from '../../utilities';

@NgModule({
  declarations: [
    CePopoverComponent
  ],
  imports: [
    CommonModule,
    CeLayoutModule,
    CeUtilitiesModule
  ],
  exports: [
    CePopoverComponent
  ]
})
export class CePopoverModule { }
