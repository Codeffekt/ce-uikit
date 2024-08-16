import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CeButtonModule } from './button';
import { CeCheckboxModule } from './checkbox';
import { CeDialogModule } from './dialog';
import { CeDividerModule } from './divider';
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
import { CeInputColorModule } from './input/input-color';
import { CeRadioButtonModule } from './radio-button';
import { CeTabsModule } from './tabs/tabs.module';
import { CeTextAreaModule } from './text-area';

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
    CeDialogModule,
    CeDividerModule,
    CeFormFieldModule,
    CeIconModule,
    CeInputModule,
    CeInputColorModule,
    CeOverlayModule,
    CePopoverModule,
    CeRadioButtonModule,
    CeSelectModule,
    CeTabsModule,
    CeTextAreaModule,
    CeTextModule,
    CeToastModule,
    CeTooltipModule,
  ]
})
export class CeComponentsModule { }
