import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeButtonModule } from './button';
import { CeCheckboxModule } from './checkbox';
import { CeDialogModule } from './dialog';
import { CeFormFieldModule } from './form-field';
import { CeIconModule } from './icon';
import { CeInputModule } from './input';
import { CeSelectModule } from './select';
import { CeTextModule } from './text';
import { CeOverlayModule } from './overlay';
import { CePopoverModule } from './popover';
import { CeToastModule } from './toast';
import { CeTooltipModule } from './tooltip';
import { CeColorPickerModule } from './color-picker';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CeButtonModule,
    CeCheckboxModule,
    CeColorPickerModule,
    CeFormFieldModule,
    CeIconModule,
    CeInputModule,
    CeOverlayModule,
    CeTextModule,
    CeSelectModule,
    CeDialogModule,
    CePopoverModule,
    CeToastModule,
    CeTooltipModule
  ]
})
export class CeComponentsModule { }
